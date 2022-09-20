import Img from "../tools/Img";
import Button from "../tools/Button";
import { TiTick } from "react-icons/ti";

function GetStarted() {
  return (
    <>
      <section className="py-8">
        <div className="absolute w-full h-1/2 bottom-0 left-0 bg-violet-700"></div>
        <div className="container ">
          <div className="bg-violet-50 p-16 rounded-lg overflow-hidden z-10">
            <p className="tag">Why are you waiting for</p>
            <h2 className="font-black mt-2 ">30 days money back guarantee</h2>
            <p>
              We'll refund your payment if you’re not 100% satisfied with
              Hostinger.
            </p>

            <div className="flex items-center gap-4 mt-2 mb-4">
              <div className="flex items-center gap-2">
                <div className="text-violet-100 bg-green-500 p-[1px] rounded-full mb-1">
                  <TiTick />
                </div>
                <p className="font-semibold">No hassle</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-violet-100 bg-green-500 p-[1px] rounded-full mb-1">
                  <TiTick />
                </div>
                <p className="font-semibold">No risk</p>
              </div>
            </div>

            <Button
              href="/"
              text="Lets get started"
              design="bg-violet-500 text-white hover:bg-violet-700 duration-200"
              visible="hidden"
            />

            <div className="absolute top-0 right-0 w-[30%] h-full -z-10">
              <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-violet-50 z-10"></div>
              <Img src="/assets/pattern-2.svg" alt="Pattern" />
            </div>
            <div className="absolute top-0 left-0 w-[20%] h-full -z-10">
              <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-violet-50 z-10"></div>
              <Img
                src="/assets/pattern-3.svg"
                alt="Pattern"
                className="opacity-80"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetStarted;
