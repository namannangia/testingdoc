
import CaseStudyCard from '@/components/OurCaseStudy/CaseStudyCard'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import HeroSecComman from '@/components/shared/HeroSecComman'
import { Text16 } from '@/components/shared/Text'
import { Card64 } from '@/components/shared/card'
import TitleSection from '@/components/titleSection'
import Cardiology from "@/assets/images/case-study/Cardiology.png"
import Laboratory from "@/assets/images/case-study/Laboratory.png"
import img1 from "@/assets/images/case-study/img.png"
import OurResearch from '@/components/OurCaseStudy/OurResearch'

const OurCaseStudy = () => {

    const cardData = [
        {
            title: 'Cardiology',
            subTitle: 'Incubater',
            image: Cardiology,
            detail: 'Investigating innovative cleaning techniques, effective disinfectants and surface coatings to remove contaminants, mitigate the spread of infectious agents, and promote healthie environments in homes, healthcare facilities, and public spaces:'
        },
        {
            title: 'Laboratory Quality Control',
            subTitle: 'Onclogy',
            image: Laboratory,
            detail: 'Investigating innovative cleaning techniques, effective disinfectants and surface coatings to remove contaminants, mitigate the spread of infectious agents, and promote healthie environments in homes, healthcare facilities, and public spaces:'
        },
        {
            title: 'Cardiology',
            subTitle: 'Incubater',
            image: img1,
            detail: 'Investigating innovative cleaning techniques, effective disinfectants and surface coatings to remove contaminants, mitigate the spread of infectious agents, and promote healthie environments in homes, healthcare facilities, and public spaces:'
        },
        {
            title: 'Cardiology',
            subTitle: 'Incubater',
            image: Cardiology,
            detail: 'Investigating innovative cleaning techniques, effective disinfectants and surface coatings to remove contaminants, mitigate the spread of infectious agents, and promote healthie environments in homes, healthcare facilities, and public spaces:'
        },
        {
            title: 'Laboratory Quality Control',
            subTitle: 'Onclogy',
            image: Laboratory,
            detail: 'Investigating innovative cleaning techniques, effective disinfectants and surface coatings to remove contaminants, mitigate the spread of infectious agents, and promote healthie environments in homes, healthcare facilities, and public spaces:'
        },
        {
            title: 'Cardiology',
            subTitle: 'Incubater',
            image: img1,
            detail: 'Investigating innovative cleaning techniques, effective disinfectants and surface coatings to remove contaminants, mitigate the spread of infectious agents, and promote healthie environments in homes, healthcare facilities, and public spaces:'
        },
    ]
    return (
        <>
            <Header />
            <HeroSecComman titleBlack="Our Case study & " titleBlue="Research" detail="Lorem ipsum dolor sit amet consectetur. Nisl in pre nisl mauris quis euismod congue. Augue elit id morbi semper sed in. " />
            <Card64>
                <Container>
                    <div className='text-center w-4/5 mx-auto mb-10 xs:hidden lg:block'>
                        <TitleSection className='xs:text-[32px] lg:text-[48px] mb-7 lg:leading-3' black="Our Case " blue="Study" />
                        <Text16>Reliable Diagnostic service center has been the diagnostic center for all your healthcare needs as we have been assisting medical professionals by providing Zero error reports.</Text16>
                    </div>

                    {/* Cards  */}
                    <div className='grid grid-cols-1 sm:gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-y-6 gap-y-10'>
                        {cardData.map((db, key) => (
                            <CaseStudyCard key={key} title={db.title} subTitle={db.subTitle} image={db.image} detail={db.detail} />
                        ))}
                    </div>
                </Container>
            </Card64>
            <OurResearch />
            <Footer />
        </>
    )
}

export default OurCaseStudy