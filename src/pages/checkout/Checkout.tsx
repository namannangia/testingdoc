import { HeroSectionBookHome } from "@/components/BookHome/HeroSection";
import { CheckoutSteps } from "@/components/checkout/CheckOutSteps";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import HeroSecComman from "@/components/shared/HeroSecComman";

export default function Checkout() {
  return (
    <div>
      <Header />
      <HeroSecComman titleBlack="Check" titleBlue="out" detail="Lorem ipsum dolor sit amet consectetur. Nisl in pre nisl mauris quis euismod congue. Augue elit id morbi semper sed in. " />
      <CheckoutSteps />

      <Footer />
    </div>
  );
}
