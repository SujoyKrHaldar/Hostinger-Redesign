import Head from "next/head";
import ConnectingPeople from "../components/home/ConnectingPeople";
import GetStarted from "../components/home/GetStarted";
import Landing from "../components/home/Landing";
import Pricing from "../components/home/Pricing";
import SearchDomain from "../components/home/SearchDomain";
import Services from "../components/home/Services";
import SupportComp from "../components/home/SupportComp";
import Testimonials from "../components/home/Testimonials";
import UserGuides from "../components/home/UserGuides";
import Layout from "../components/layout/Layout";
import Loader from "../components/tools/Loader";

export default function Home() {
  return (
    <>
      <Head>
        <title>Choose Hostinger and Host Your Site for Only ₹129.00/mo</title>
        <meta
          name="description"
          content="Go online with Hostinger, make your perfect website today. Check our plans and their features. We have all you need for online success."
        />
      </Head>

      <Layout>
        {/* <Loader/> */}
        <Landing />
        {/* <SupportComp />
        <Services />
        <SearchDomain />
        <UserGuides />
        <Testimonials />
        <ConnectingPeople /> */}
        <Pricing />
        <GetStarted />
      </Layout>
    </>
  );
}
