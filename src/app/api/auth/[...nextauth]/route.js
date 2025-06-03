import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      id: "credentials",
      name: "credentials", 
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }

        try {
          await connect();
          
          const user = await User.findOne({
            email: credentials.email,
          });

          if (!user) {
            throw new Error("User not found!");
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordCorrect) {
            throw new Error("Wrong credentials!");
          }

          // Return user object (without password)
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
          };

        } catch (err) {
          console.error("Auth error:", err);
          throw new Error(err.message || "Authentication failed");
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    error: "/dashboard/login",
    signIn: "/dashboard/login", // Add this for better UX
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
    // Add redirect callback for production
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    // Handle Google OAuth sign-in
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        try {
          await connect();
          
          // Check if user already exists
          const existingUser = await User.findOne({ email: user.email });
          
          if (!existingUser) {
            // Create new user if doesn't exist
            const newUser = new User({
              name: user.name,
              email: user.email,
              // No password for Google users
            });
            await newUser.save();
          }
          
          return true;
        } catch (error) {
          console.error("Error saving Google user:", error);
          return false;
        }
      }
      return true;
    },
  },
  // Add session strategy
  session: {
    strategy: "jwt",
  },
  // Add secret (important for production)
  secret: process.env.NEXTAUTH_SECRET,
});

export const { GET, POST } = handlers;