import Header from "./_components/layout/header";
import { Hero } from "./_components/hero/hero";
import { Features } from "./_components/features/features";
import Footer from "./_components/layout/footer";

export default function MarketingPage() {
  return (
    <main className="bg-black">
      <Header />
      <div className="items-center justify-center">
        <Hero />
        <Features />
      </div>
      <Footer />
    </main>
  );
}
