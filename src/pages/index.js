import Image from "next/image";
import Banner from "../../components/container/Home/Banner";
import Navbar from "../../components/common/Navbar";
import Testimonial from "../../components/container/Home/Testimonial";
import Groth from "../../components/container/Home/Groth";
import KeywordInsightHub from "../../components/container/Home/KeywordInsightHub";
import Footer from "../../components/common/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Testimonial />
      <Groth />
      <KeywordInsightHub />
      <Footer />
    </>
  );
}
