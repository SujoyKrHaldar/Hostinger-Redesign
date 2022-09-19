import Link from "next/link";
import Img from "../tools/Img";

const parks = [
  {
    name: "Only with ₹149.00/mo.",
  },
  {
    name: "Get exclusive 30-day money-back guarantee.",
  },
];

function Landing() {
  return (
    <>
      <section className="w-full h-[768px] py-16">
        <div className="absolute top-0 right-0 w-[30%] h-full">
          <Img src="/assets/pattern-3.svg" alt="pattern" />
        </div>

        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] -z-10">
          <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-white z-10"></div>
          <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white z-10"></div>
          <Img src="/assets/pattern-2.svg" alt="pattern" />
        </div>
        <div className="container w-full h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="font-black leading-[3.5rem] mb-4">
              Savings to Set{" "}
              <span className="block">Your Website in Motion</span> at{" "}
              <span className="bg-violet-100">₹149.00/mo</span>.
            </h1>
            <p className="max-w-lg mb-8">
              We are an employee-owned Web hosting provider and Internet domain
              registrar, established in 2004. Make moves with a free domain and
              SSL included with a four-year subscription.
            </p>
            <Link href="#">
              <a
                className="bg-red-700 text-white pt-3 pb-2 px-8 rounded-full 
              inline-block font-bold"
              >
                Get started
              </a>
            </Link>
            <div className="">
              <div className="">
                <div className=""></div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
