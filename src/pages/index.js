import Image from "next/image";
import Banner from "../../components/container/Home/Banner";
import Navbar from "../../components/common/Navbar";
import Testimonial from "../../components/container/Home/Testimonial";
import Growth from "../../components/container/Home/Growth";
import KeywordInsightHub from "../../components/container/Home/KeywordInsightHub";
import Footer from "../../components/common/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Testimonial />
      <Growth />
      <KeywordInsightHub />
      <Footer />
    </>
  );
}
