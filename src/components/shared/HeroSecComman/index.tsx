import { Container } from "@/components/container"
import { Card64 } from "../card"
import TitleSection from "@/components/titleSection"
import { Text16 } from "../Text"

interface isHeroSecComman{
    className?:any
    titleBlack?:any
    titleBlue?:any
    detail?:any
}

const HeroSecComman = ({titleBlack, titleBlue, detail}:isHeroSecComman) => {
    return (
        <Card64 className="book-test-hero">
            <Container className="xs:text-center text-left">
                <TitleSection className='xs:text-[32px] lg:text-[48px] mb-6' black={titleBlack} blue={titleBlue} />
                <Text16 >{detail}</Text16>
            </Container>
        </Card64>
    )
}

export default HeroSecComman