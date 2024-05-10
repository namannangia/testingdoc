import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { HeroFacilities } from '@/components/FacilitiesPage/HeroFacilities/index'
import { AboutClinic } from '@/components/FacilitiesPage/AboutClinic'
import { Presence } from '@/components/BookHome/Presence';
import { HealthPackage } from '@/components/FacilitiesPage/HealthPackage'
import {HealthBenefit} from '@/components/FacilitiesPage/HealthBenefit'
import { FacilitiesFaq } from "@/components/FacilitiesPage/FaqSection";

export default function FacilitiesPage() {
  return (
    <div>
      <Header />
      <HeroFacilities />
      <AboutClinic />
      <Presence />
      <HealthPackage />
      <HealthBenefit/>
      <FacilitiesFaq />
      <Footer />
    </div>
  )
}
