import Cookies from "./_components/Cookies";
import MarketingFeatures from "./_components/features/Features";
import MarketingHeader from "./_components/Header";
import { Hero } from "./_components/Hero";

export default function MarketingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <MarketingHeader />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl flex flex-col items-center justify-center md:justify-start text-center py-16 gap-y-24 flex-1">
          <Hero />
          <MarketingFeatures />
        </div>
      </div>
    </main>
  );
}
