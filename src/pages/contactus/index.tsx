import React from "react";
import { Header } from "@/components/header";
import { Footer } from '@/components/footer'
import HeroSecContact from "@/components/ContactUs/herosection";
import GetInTouch from "@/components/ContactUs/GetInTouch/index"
import ContactSection from "@/components/ContactUs/contactsection";

const index = () => {
    return (
        <>
            <Header />
            <HeroSecContact />
            <GetInTouch/>
            <ContactSection/>
            <Footer />
        </>
    );
};

export default index;
