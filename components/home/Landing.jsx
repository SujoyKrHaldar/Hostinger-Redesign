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
      <section className="w-full h-[800px] py-16">
        <div className="absolute top-0 right-0 w-[30%] h-full -z-10">
          <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-white z-10"></div>
          <Img src="/assets/pattern-3.svg" alt="pattern" />
        </div>

        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] -z-10">
          <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-white z-10"></div>
          <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white z-10"></div>
          <Img src="/assets/pattern-2.svg" alt="pattern" />
        </div>

        <div className="container w-full h-full flex items-center justify-between gap-4">
          <div className="max-w-2xl">
            <h1 className="font-black leading-[3.5rem] mb-4">
              Savings to Set{" "}
              <span className="block">Your Website in Motion</span> at{" "}
              <span className="bg-violet-100">₹149.00/mo</span>.
            </h1>
            <p className="max-w-lg mb-4">
              We are an employee-owned Web hosting provider and Internet domain
              registrar, established in 2004. Make moves with a free domain and
              SSL included with a four-year subscription.
            </p>

            <div className="absolute w-[276px] h-[10px] left-[4rem] top-[10rem] ">
              <Img
                src="/assets/underline-black.svg"
                alt=""
                className="opacity-20"
              />
            </div>

            <div className="absolute w-[130px] h-[140px] left-[-5rem] bottom-[5rem] ">
              <Img
                src="/assets/arrow-right.svg"
                alt=""
                className="opacity-50"
              />
            </div>

            <Button
              href="#"
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

          <div className="flex-1 h-[550px]">
            <Img src="/assets/landing-image.png" alt="landing image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
