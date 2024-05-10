import CustomButton from '@/components/CustomButton'
import { Text14, Text16, Text24 } from '@/components/shared/Text'
import { BorderBox } from '@/components/shared/card'
import Image from 'next/image'

interface isCaseStudyCard {
    className?: any
    image?: any
    title?: any
    subTitle?: any
    detail?: any
}

const CaseStudyCard = ({ image, subTitle, title, detail }: isCaseStudyCard) => {
    return (
        <BorderBox className={`grediant-border p-[1.5px] pt-0 rounded-lg`}>
            <div className="h-full rounded-lg bg-white w-full p-6 inner-div flex flex-col gap-[30px]">
                <Image src={image} alt={''} className='11mb-[30px]' />
                <div className='11mb-[30px]'>
                    <Text14 color="text-black" className='mb-2'>{subTitle}</Text14>
                    <Text24 color="text-black" className='mb-2 font-bold'>{title}</Text24>
                    <Text16>{detail}</Text16>
                </div>
                <CustomButton btn="skylight-auto" className='w-32 h-12'>View Case</CustomButton>
            </div>
        </BorderBox>
    )
}

export default CaseStudyCard