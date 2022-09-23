import Head from "next/head";
import Layout from "../components/layout/Layout";

function cart() {
  return (
    <>
      <Head>
        <title>Cart - Hostinger</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <section className="py-24">
          <div className="container">
            <h2 className="font-bold">Cart is Empty</h2>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default cart;
