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
  // Remove or modify the custom error page
  // pages: {
  //   error: "/dashboard/login",
  // },
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
  },
  // Add explicit secret configuration
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
});

export const { GET, POST } = handlers;
