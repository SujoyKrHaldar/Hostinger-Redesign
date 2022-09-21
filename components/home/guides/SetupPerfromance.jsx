import Button from "../../tools/Button";
import Img from "../../tools/Img";

function SetupPerfromance() {
  return (
    <section className="py-16">
      <div className="absolute top-0 right-0 w-[300px] h-full -z-10">
        <div className="absolute w-full h-1/2 inset-0 bg-gradient-to-r from-white z-10"></div>
        <div className="absolute w-full h-1/2 inset-0 bg-gradient-to-b from-white z-10"></div>

        <Img src="/assets/pattern-2.svg" alt="pattern" />
      </div>

      <div className="absolute h-1/3 w-full bg-violet-200 bottom-0 left-0"></div>

      <div className="container flex items-center gap-4">
        <div className="flex-1 max-w-md p-8 bg-white border-2 border-violet-300">
          <div className="w-full h-[183px] mb-8 border-2 border-violet-300">
            <Img src="/assets/easy-to-setup.png" alt="Easy to setup preview" />
          </div>
          <p className="tag">use case</p>
          <h2 className="font-bold">
            Easy to{" "}
            <span className="font-black text-violet-900">Use and Setup</span>
          </h2>
          <p>
            Getting your website live is as simple as a click of a button.
            Everything you need - provided in a clear way.
          </p>

          <Button
            href="#"
            text="Learn more"
            design="bg-violet-500 mt-4 pt-3 pb-2 px-8 text-white hover:bg-violet-700 duration-200"
          />
        </div>

        <div className="flex-1 max-w-md p-8 bg-white border-2 border-violet-300">
          <div className="w-full h-[183px] mb-8 border-2 border-violet-300">
            <Img src="/assets/fast-load.png" alt="Easy to setup preview" />
          </div>

          <p className="tag">PERFORMANCE AND SPEED</p>
          <h2 className="font-bold">
            <span className="font-black text-violet-900">Lightning-fast</span>{" "}
            websites
          </h2>
          <p className="max-w-md">
            Website speed can slow or grow your business. Delight your visitors
            with a fast-loading and optimized website.
          </p>

          <Button
            href="#"
            text="Learn more"
            design="bg-violet-500 mt-4 pt-3 pb-2 px-8 text-white hover:bg-violet-700 duration-200"
          />
        </div>
      </div>
    </section>
  );
}

export default SetupPerfromance;
