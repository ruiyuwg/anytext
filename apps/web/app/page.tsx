import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import Features from "@/components/features-4";
import { HowItWorks } from "@/components/how-it-works";
import IntegrationsSection from "@/components/integrations-5";
import { GetStarted } from "@/components/get-started";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 md:border-x">
        <Hero />
        <GetStarted />
        <IntegrationsSection />
        <HowItWorks />
        <Features />
      </main>
      <div className="py-12" />
      <Footer />
    </div>
  );
}
