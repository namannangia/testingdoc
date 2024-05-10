import { Packages } from "@/components/BookTest/Packages";
import { TabPages } from "@/components/dashboard";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import HeroSecComman from "@/components/shared/HeroSecComman";
export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 11gap-16">
        <HeroSecComman titleBlack="Dash" titleBlue="board" detail="Manage everything you want to manage in your account from here easily." />
        <TabPages />
      </div>
      <Footer />
    </div>
  );
}
