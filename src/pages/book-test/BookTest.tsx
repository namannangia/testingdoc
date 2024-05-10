import { HeroSectionBookTest } from "@/components/BookTest/HeroSection";
import { Packages } from "@/components/BookTest/Packages";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
export default function BookTest() {
  return (
    <div>
      <Header />
      <HeroSectionBookTest />
      <Packages />
      
      <Footer />
    </div>
  );
}
