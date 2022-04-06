import Header from "../sections/Header";
import Body from '../sections/SectionZero'
import SectionOne from "../sections/SectionOne";
import SectionTwo from '../sections/SectionTwo'
import Pricing from "../sections/pricing";

const LandingPage = () => {
    return (
        <>
        <Header/>
        <Body/>
        <SectionOne />
        <SectionTwo />
        <Pricing />
        </>
    );
}

export default LandingPage;