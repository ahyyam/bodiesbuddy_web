import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Screenshots } from "@/components/landing/Screenshots";
import { Calculator } from "@/components/landing/Calculator";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";
import { LiveChatWidget } from "@/components/landing/LiveChatWidget";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Screenshots />
        <Calculator />
        <Testimonials />
      </main>
      <Footer />
      <LiveChatWidget />
    </div>
  );
}
