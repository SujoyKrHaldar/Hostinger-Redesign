import Head from "next/head";
import Layout from "../components/layout/Layout";
import Button from "../components/tools/Button";

function pageNotFound() {
  return (
    <>
      <Head>
        <title>Page not found - Hostinger</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <section className="py-24 w-full h-[600px] text-center">
          <div className="container h-full flex items-center justify-center">
            <div className="space-y-2">
              <p className="tag">404</p>
              <h1 className="font-bold text-5xl my-2">Page not found</h1>
              <p>This page is not exists.</p>
              <Button
                href="/"
                text="Go home"
                design="bg-violet-500 pt-3 pb-2 px-8 text-white hover:bg-violet-700 duration-200 mx-auto"
                visible="hidden"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default pageNotFound;
