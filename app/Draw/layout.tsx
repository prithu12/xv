import Toopbar from "@/components/layout/Toopbar";

export default function DrawLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <Toopbar />
        <div className="flex-grow">{children}</div>       
    </main>
  );
}
