import Button from "../../tools/Button";
import Img from "../../tools/Img";

function Scale() {
  return (
    <section className="pb-8">
      <div className="container">
        <div className="p-8 sm:p-16 bg-violet-200 flex items-center justify-between gap-4 z-10">
          <div className="flex-1 max-w-md">
            <p className="tag">FLEXIBLE AND SCALABLE</p>
            <h2 className="font-bold my-2 leading-10">
              From{" "}
              <span className="font-black text-violet-900">
                Micro to Large-scale
              </span>
            </h2>
            <p>
              Different projects require different technologies. Pick a plan
              that matches your current needs, then upgrade and scale as your
              website grows.
            </p>

            <Button
              href="#"
              text="Explore all products"
              design="bg-violet-500 mt-4 pt-3 pb-2 px-8 text-white hover:bg-violet-700 duration-200"
            />
          </div>

          <div className="hidden lg:block flex-1 w-full max-w-[250px] mx-auto">
            <Img
              src="/assets/graph-scale.png"
              alt="scale"
              layout="responsive"
              w={250}
              h={250}
            />
          </div>

          <div className="hidden md:block absolute top-0 right-0 w-[30%] h-full -z-10">
            <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-violet-200 z-10"></div>
            <Img
              src="/assets/pattern-2.svg"
              alt="Pattern"
              className="opacity-50"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] -z-10">
            <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-violet-200 z-10"></div>
            <Img
              src="/assets/pattern-3.svg"
              alt="Pattern"
              className="opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scale;
