import { Container } from '@/components/container'
import { Text16, Text18 } from '@/components/shared/Text'
import { BorderBox, Card64 } from '@/components/shared/card'
import TitleSection from '@/components/titleSection'
import Image from 'next/image'
import BiochemicalResearch from "@/assets/images/case-study/Biochemical-Research.png"
import BiochemicalResearchMobile from "@/assets/images/case-study/Biochemical-Research-mobile.png"
import pharmaceuticalResearch from "@/assets/svg/pharmaceutical-research.svg"
import PathologicalResearch from "@/assets/svg/Pathological-research.svg"
import AgricultureResearch from "@/assets/svg/Agriculture-research.svg"
import MetabolicResearch from "@/assets/svg/Metabolic-research.svg"


const OurResearch = () => {

    const cardData = [
        {
            title: 'Pharmaceutical research',
            image: pharmaceuticalResearch,
            detail: 'Innovating for Impact: Revolutionizing Healthcare through Cutting-Edge Pharmaceutical Research.'
        },
        {
            title: 'Pathological research',
            image: PathologicalResearch,
            detail: 'Engaged was the evident pleased husband. Ye goodness felicity do disposal dwelling no.'
        },
        {
            title: 'Agriculture research',
            image: AgricultureResearch,
            detail: 'Cultivating a Greener Future: Revolutionizing Agriculture through Cutting-Edge Research.'
        },
        {
            title: 'Metabolic research',
            image: MetabolicResearch,
            detail: 'Extremity now strangers contained breakfast him discourse additions Sincerity collected contented led now perpetual extremely forfeited.'
        },
    ]

    return (
        <Card64 className='bg-case-study'>
            <Container>
                <div className='text-center w-4/5 mx-auto xs:mb-6 mb-10'>
                    <TitleSection className='xs:text-[24px] lg:text-[48px] xs:mb-2 mb-7 lg:leading-3' black="Our " blue="Research" />
                    <Text16 className='xs:text-[10px] xs:leading-4'>Reliable Diagnostic service center has been the diagnostic center for all your healthcare needs as we have been assisting medical professionals by providing Zero error reports.</Text16>
                </div>

                <Image src={BiochemicalResearch} alt={''} className='mb-6 xs:hidden block' />
                <Image src={BiochemicalResearchMobile} alt={''} className='mb-6 xs:block hidden' />
                {cardData.map((db, key) => (
                    <BorderBox className='px-6 py-5 rounded-lg grid grid-cols-12 gap-3 mb-6 last:mb-0'>
                        <div className='col-span-12 lg:col-span-6 flex gap-3 items-center'>
                            <Image src={db.image} alt={''} width={40} height={40} />
                            <Text18 color="text-black" className='break-words xs:w-1/2'>{db.title}</Text18>
                        </div>
                        <div className='col-span-12 lg:col-span-6 pl-0 lg:pl-12'>
                            <Text16 color="text-black" className='xs:text-sm'>{db.detail}</Text16>
                        </div>
                    </BorderBox>
                ))}
            </Container>
        </Card64>
    )
}

export default OurResearch