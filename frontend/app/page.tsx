import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section id="pipeline" className="min-h-screen bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-text">
            Từ ý tưởng đến deploy hoàn toàn tự động
          </h2>
        </div>
      </section>
    </main>
  );
}
