import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSectionBookHome } from "@/components/BookHome/HeroSection";
import { EnquiryBookHome } from "@/components/BookHome/EnquirySection";
import { Presence } from "@/components/BookHome/Presence";
import { Packages } from "@/components/BookTest/Packages";
import { FaqSection } from "@/components/BookHome/FaqSection";

export default function BookHome() {
  return (
    <div>
      <Header />
      <HeroSectionBookHome />
      <EnquiryBookHome />
      <Presence />
      <Packages />
      <FaqSection />
      <Footer />
    </div>
  );
}
