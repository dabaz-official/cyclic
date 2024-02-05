import Header from "./_components/header/header";
import { Hero } from "./_components/hero/hero";
import { Features } from "./_components/features/features";

export default function MarketingPage() {
  return (
    <main className="bg-black">
      <Header />
      <div className="items-center justify-center">
        <Hero />
        <Features />
      </div>
    </main>
  );
}
