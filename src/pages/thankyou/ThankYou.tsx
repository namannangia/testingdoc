import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import BookingSuccess from "@/components/ThankYou/BookingSuccess";
import PopularHealthPackage from "@/components/ThankYou/HelthPackage";
import {HeroSectionThankYou} from '@/components/ThankYou/HeroSection'

export default function ThankYou() {
  return (
    <div>
      <Header />
      <HeroSectionThankYou />
      <BookingSuccess />
      <PopularHealthPackage />
      <Footer />
    </div>
  );
}
