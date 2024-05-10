import { Container } from "@/components/container"
import { Text16, Text20, Text24, Text32, TextSky } from "@/components/shared/Text"
import { BorderBox, Card } from "@/components/shared/card"
import Image from "next/image"
import Cities from "@/assets/images/benefits/Cities.svg"
import Ontime from "@/assets/images/benefits/On-time.svg"
import Reports24 from "@/assets/images/benefits/Reports24.svg"
import affordable from "@/assets/images/benefits/affordable.svg"
import certifiedLabs from "@/assets/images/benefits/certifiedLabs.svg"
import consultation from "@/assets/images/benefits/consultation.svg"
import dot from "@/assets/svg/dot.svg"
import { AccordionGroup } from "@/components/shared/AccordionGroup"
import { CategoryReportCard } from "./CategoryReportCard"
import { CustomSlickSlider } from "@/components/SlickSlider"

const Reports = ({
    reportHrs,
    TestNum,
    Preparation,
    AlsoKnownAs,
    FaqData,
    CategoryId,
    TestbyCategory
}: IReportcard) => {

    return (
        <>
            {/* Reports in */}
            <Card className="lg:pt-[0]">
                <Container>
                    <BorderBox className="!border-[#42BAE8] bg-[#DFF3FB] p-4 lg:py-4 lg:px-6 rounded-lg flex flex-wrap items-center gap-2 lg:gap-8 mb-6">
                        <Text24 className="xs:text-base w-full lg:w-fit TestReportHead">Reports in <span className="text-[#030712] font-medium">{reportHrs}</span></Text24>
                        <Text24 className="xs:text-base w-full lg:w-fit TestReportHead">Tests <span className="text-[#030712] font-medium">{TestNum}</span></Text24>
                    </BorderBox>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {[{ title: 'Fasting', detail: Preparation }, { title: 'Get reports in', detail: reportHrs }, { title: 'Home visit', detail: 'Sample pick-up' },].map((el, key) => (
                            <BorderBox className="border-[#E5E7EB] bg-[#F9FAFB] p-4 lg:py-4 lg:px-6 rounded-lg flex flex-col gap-[10px]">
                                <Text16>{el.title}</Text16>
                                <Text32 className=" text-turnary-800">{el.detail}</Text32>
                            </BorderBox>
                        ))}
                    </div>
                </Container>
            </Card>
            {/* What is it for ? */}
            <Card className="bg-grey-deafult">
                <Container>
                    <div className="flex flex-col gap-16">
                        <div>
                            <Text32 className="mb-3">What is it for ?</Text32>

                            {/* <Text24 className="mb-4 lg:mb-0">The test assesses the thyroid gland's functioning and helps to diagnose hyperthyroidism or hypothyroidism.</Text24> */}
                            <Text24><TextSky className="font-semibold">Also known as:</TextSky> {AlsoKnownAs}</Text24>
                        </div>
                        <div>
                            <Text32 className="mb-3">Test Instructions</Text32>
                            <Text24><TextSky className="font-semibold">Age Group: </TextSky>All Ages</Text24>
                        </div>
                    </div>
                </Container>
            </Card>
            {/* Benefits */}
            <Card className="">
                <Container>
                    <Text32 className="mb-2">Benefits</Text32>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[{ title: 'Most affordable Pricing', image: affordable }, { title: 'Free Reports Consultation', image: consultation }, { title: 'Smart Reports in 24 hours*', image: Reports24 }, { title: 'On-time Sample collection', image: Ontime }, { title: 'Government certified Labs', image: certifiedLabs }, { title: 'Presence in 220+ Cities', image: Cities },].map((el, key) => (
                            <BorderBox className="border-grey-200 bg-grey-deafult rounded-2xl  p-4 lg:p-7 flex items-center gap-7">
                                <Image src={el.image} alt={el.title} />
                                <Text20 className="font-bold" color={"text-gray-800"}>{el.title}</Text20>
                            </BorderBox>
                        ))}
                    </div>
                </Container>
            </Card>
            {/* Included Tests */}
            <Card className="bg5">
                <Container>
                    <Text32 color={"text-gray-950"}>Related Tests</Text32>
                    {/* <Text24 className="mb-10 text-2xl sm:text-xl md:text-xl text-gray-500 ">Package includes following parameters</Text24> */}
                    {/* <Text24 className="text-turnary-800 font-semibold mb-3 md:text-xl sm:text-xl">Thyroid Profile</Text24> */}
                    <CustomSlickSlider>
                        {TestbyCategory.map((item: any) => {
                            return (
                                <CategoryReportCard
                                    productId={item._id}
                                    title={item.meta_title}
                                    description="It assesses your risks for potential health diseases and helps in health monitoring."
                                    reportTime={item.report}
                                    totalTest={item.number_of_star}
                                    discount={Math.round(((item.mrp - item.offer_price) / item.mrp) * 100).toString()}
                                    sellingPrice={item.offer_price}
                                    purchasePrice={item.mrp}
                                    className="CatSliderMain"
                                />
                            );
                        })}
                    </CustomSlickSlider>
                </Container>
            </Card>
            {/* Test Criteria */}

            {/* <Container>
                    <div className="pt-0 md:py-6 flex flex-col gap-10 xs:gap-6 sm:gap-6 pb-16 xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
                        <AccordionGroupTest
                            title="Test Criteria"
                            subTitle="Helps you know your test better"
                            accordionData={FaqData}
                        />
                    </div>
                </Container> */}

            {/* {faqDetails.map((item, id) => {
                            return (
                                <li> {item.faq_title}</li>
                            )
                        })} */}

            <AccordionGroup
                title="FAQ"
                subTitle="Helps you know your test better"
                accordionData={FaqData}
            />


        </>
    )
}

export default Reports