import Button from "../../tools/Button";
import Img from "../../tools/Img";

function Scale() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="p-16 bg-violet-200 flex items-center justify-between gap-4 ">
          <div className="flex-1 max-w-md">
            <p className="tag">FLEXIBLE AND SCALABLE</p>
            <h2 className="font-bold mb-1">
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

          <div className="flex-1 w-full h-[250px]">
            <Img src="/assets/scale.png" alt="scale" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scale;
