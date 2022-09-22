import Button from "../tools/Button";
import Img from "../tools/Img";
import { TiTick } from "react-icons/ti";

const parks = [
  {
    name: "Free domain, email and support included",
  },
  {
    name: "Get exclusive 30-day money-back guarantee.",
  },
];

function Landing() {
  return (
    <>
      <section className="w-full h-screen xl:h-[800px] py-16">
        <div className="absolute top-0 right-0 w-[30%] h-full -z-10">
          <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-white z-10"></div>
          <Img src="/assets/pattern-3.svg" alt="pattern" />
        </div>

        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] -z-10">
          <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-white z-10"></div>
          <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white z-10"></div>
          <Img src="/assets/pattern-2.svg" alt="pattern" />
        </div>

        <div
          className="container w-full h-full flex items-end lg:items-center 
        xl:justify-between gap-4"
        >
          <div className="flex-1 max-w-lg xl:max-w-full">
            <h1
              className="text-4xl xl:text-[3rem] font-black leading-[3rem] 
            xl:leading-[3.5rem] mb-4  "
            >
              Savings to Set{" "}
              <span className="xl:block">Your Website in Motion</span> at{" "}
              <span className="bg-violet-100">₹149.00/mo</span>.
            </h1>
            <p className="max-w-md mb-4">
              We are an employee-owned Web hosting provider and Internet domain
              registrar, established in 2004. Make moves with a free domain and
              SSL included with a four-year subscription.
            </p>

            <div className="hidden xl:block absolute w-[276px] h-[10px] left-[4rem] top-[10rem] ">
              <Img
                src="/assets/underline-black.svg"
                alt=""
                className="opacity-70"
              />
            </div>

            <div className="hidden md:block absolute w-[130px] h-[140px] left-[-5rem] bottom-[5rem] ">
              <Img
                src="/assets/arrow-right.svg"
                alt=""
                className="opacity-50"
              />
            </div>

            <Button
              href="#start-with-premium"
              text="Get started"
              design="bg-violet-500 pt-3 pb-2 px-8 text-white hover:bg-violet-700 duration-200"
              visible="hidden"
            />

            <div className="mt-4 space-y-1">
              {parks.map((data, id) => (
                <div key={id} className="flex items-center gap-2">
                  <div
                    className="text-violet-100 bg-green-500 p-[0.5px] 
                  text-sm rounded-full mb-1"
                  >
                    <TiTick />
                  </div>
                  <p className="text-sm">{data.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute opacity-30 w-full mx-auto max-w-[420px] 
            lg:opacity-100 lg:max-w-lg inset-0 -z-10 lg:relative flex-1 lg:h-auto
            xl:translate-y-[-2rem]    "
          >
            <Img
              src="/assets/landing-image.png"
              alt="landing image"
              w={300}
              h={300}
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
