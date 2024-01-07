import Code from "@/components/Code";

export default function Home() {
  return (
    <main className="w-full h-full flex items-center justify-center flex-col gap-4">
      <h1 className="text-4xl font-black">Code Share</h1>
      <Code/>
    </main>
  );
}
