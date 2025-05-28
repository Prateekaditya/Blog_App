import Button from "@/components/Button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex items-center gap-[100px]">
      <div className="flex-1 flex flex-col gap-[40px]">
      <h1 className="text-[72px]/18 bg-gradient-to-b from-[#f06c50] to-stone-400 text-transparent bg-clip-text">Better Design For digital Product</h1>
      <p className="text-[24px]/9 font-[300]">Turning ideas into reality we bring together global tech industry</p>
      <Button url="/portfolio" text="see our work"/>
      </div>
      <div>
      <Image width={600} height={600} src="https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/anatomy-of-a-blog-post-deconstructed-header.jpg" alt="sjha"/>
      </div>

    </div>
    </>
  );
}
