import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Image
        src="/IMAGE.png"
        draggable="false"
        width={10000}
        height={3484}
        alt="recipict"
      />
    </main>
  );
}
