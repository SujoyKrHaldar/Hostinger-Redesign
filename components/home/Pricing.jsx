import Button from "../tools/Button";
import { TiTick } from "react-icons/ti";
import Img from "../tools/Img";

const premiumService = [
  {
    name: "Unmetered traffic (Unlimited GB)",
  },
  {
    name: "100 GB SSD",
  },
  {
    name: "100 Websites",
  },
  {
    name: "Free Weekly Backups",
  },
  {
    name: "Unlimited Free SSL ",
  },
  {
    name: "Free Domain ",
  },
  {
    name: "Free Email  ",
  },
  {
    name: "Optimized for WordPress ",
  },
];

const buisnessServices = [
  {
    name: "Unmetered traffic (Unlimited GB)",
  },
  {
    name: "200 GB SSD",
  },
  {
    name: "100 Websites",
  },
  {
    name: "Free Weekly Backups",
  },
  {
    name: "Unlimited Free SSL ",
  },
  {
    name: "Free Domain",
  },
  {
    name: "Free Email ",
  },
  {
    name: "Optimized for WordPress ",
  },
];

function Pricing() {
  return (
    <section id="start-with-premium" className="py-16">
      <div className="container space-y-8 xl:space-y-0 xl:flex items-center justify-between gap-16">
        <div className="flex-1 max-w-md sm:text-center xl:text-left sm:mx-auto">
          <div className="hidden xl:block absolute w-[180px] h-[140px] top-[-7rem] right-[-5rem] -rotate-45 ">
            <Img src="/assets/arrow-top.svg" alt="" className="opacity-50" />
          </div>

          <p className="tag">Best value</p>
          <h2 className="font-bold leading-10 my-2">
            All in one{" "}
            <span className="font-black text-violet-700">Best Web Hosting</span>
          </h2>
          <p className="mb-4">
            We prepared the best web hosting plan for you to start. You will be
            able to adjust plans as you go - our custom-built algorithm will
            provide suggestions based on your usage.
          </p>
          <Button
            href="/"
            text="See all comparisons"
            design="bg-violet-500 text-white hover:bg-violet-700 duration-200 sm:mx-auto xl:ml-0"
          />
        </div>

        <div className="flex-1 block space-y-4 sm:space-y-0 sm:flex xl:items-end 
        justify-center xl:justify-end gap-4">
          <div className="flex-1 border-2 border-violet-700 md:hover:border-violet-900 duration-200">
            <div className="p-6 bg-violet-300">
              <div className="absolute w-[115px] h-[85px] top-4 left-0 ">
                <Img src="/assets/circle.svg" alt="" />
              </div>
              <p className="font-bold">Premium</p>
              <h2 className="font-black">₹ 149.00 /mo </h2>
              <p>Best for small buisness.</p>
            </div>

            <div className="space-y-2 p-6">
              <p className="font-bold">What you will get</p>
              {premiumService.map((data, id) => (
                <div key={id} className="flex items-center gap-2">
                  <div className="text-violet-100 bg-green-500 p-[1px] rounded-full mb-1">
                    <TiTick />
                  </div>
                  <p className="text-sm">{data.name}</p>
                </div>
              ))}
            </div>

            <Button
              href="/"
              text="Continue"
              design="rounded-none m-0 bg-violet-500 text-white 
              hover:bg-violet-700 duration-200"
            />
          </div>

          <div className="flex-1 border-2 border-gray-200 md:hover:border-violet-700 duration-200">
            <div className="p-6 pb-0">
              <p className="font-bold">Buisness</p>
              <h2 className="font-black">₹ 249.00 /mo </h2>
              <p>Best for big buisness.</p>
            </div>

            <div className="space-y-2 p-6">
              <p className="font-bold">What you will get</p>
              {buisnessServices.map((data, id) => (
                <div key={id} className="flex items-center gap-2">
                  <div className="text-violet-100 bg-green-500 p-[1px] rounded-full mb-1">
                    <TiTick />
                  </div>
                  <p className="text-sm">{data.name}</p>
                </div>
              ))}
            </div>

            <Button
              href="/"
              text="Continue"
              design="rounded-none m-0 bg-violet-500 text-black bg-white 
              md:hover:bg-violet-700 md:hover:text-white duration-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
