import { MarketingBanner } from "./_components/Banner";
import { MarketingHeading } from "./_components/Heading";
import { Hero } from "./_components/Hero";
import { MarketingHeader } from "./_components/Header";
import { Powerful } from "./_components/features/Powerful";

export default function MarketingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <MarketingBanner />
      <MarketingHeader />
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <MarketingHeading />
        <Hero />
        <Powerful />
      </div>
    </main>
  );
}
