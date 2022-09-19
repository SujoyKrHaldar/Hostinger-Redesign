import Head from "next/head";
import Navbar from "../components/layout/Navbar";

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

      <Navbar />
      <section>
        <div className="container py-16"></div>
      </section>
    </>
  );
}
