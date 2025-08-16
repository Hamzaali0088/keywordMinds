import Image from "next/image";
import Banner from "../../components/container/Home/Banner";
import Navbar from "../../components/common/Navbar";
import CoreBenefits from "../../components/container/Home/CoreBenefits";
import Testimonial from "../../components/container/Home/Testimonial";
import Growth from "../../components/container/Home/Growth";
import KeywordInsightHub from "../../components/container/Home/KeywordInsightHub";
import FinalCTA from "../../components/container/Home/FinalCTA";
import Footer from "../../components/common/Footer";
import LogosSlider from "../../components/container/Home/LogosSlider";
import Demo from "../../components/container/Home/Demo";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Demo />
      <CoreBenefits />
      <LogosSlider />
      <Testimonial />
      <Growth />
      <KeywordInsightHub />
      <FinalCTA />
      <Footer />
    </>
  );
}
