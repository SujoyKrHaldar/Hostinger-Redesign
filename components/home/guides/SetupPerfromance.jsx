import Button from "../../tools/Button";
import Img from "../../tools/Img";

const data = [
  {
    tag: "use case",
    img: "/assets/easy-to-setup.png",
    name: "Easy to use and Setup ",
    para: "Getting your website live is as simple as a click of a button. Everything you need - provided in a clear way.",
  },

  {
    tag: "PERFORMANCE AND SPEED",
    img: "/assets/fast-load.png",
    name: "Lightning-fast websites",
    para: " Website speed can slow or grow your business. Delight your visitors with a fast-loading and optimized website.",
  },
];

function SetupPerfromance() {
  return (
    <section className="py-16">
      <div className="hidden md:block absolute top-0 right-0 w-[300px] h-full -z-10">
        <div className="absolute w-full h-1/2 inset-0 bg-gradient-to-r from-white z-10"></div>
        <div className="absolute w-full h-1/2 inset-0 bg-gradient-to-b from-white z-10"></div>
        <Img src="/assets/pattern-2.svg" alt="pattern" />
      </div>

      <div className="hidden md:block absolute h-1/3 w-full bg-violet-200 bottom-0 left-0"></div>

      <div className="container space-y-3 md:space-y-0 md:flex gap-4">
        {data.map((data, id) => (
          <div
            key={id}
            className="flex-1 md:max-w-md py-8 last:py-0 md:p-8 bg-white md:border-2 border-violet-300"
          >
            <div className="w-full mb-8 border-2 border-violet-200 md:border-none">
              <Img
                src={data.img}
                alt="Easy to setup preview"
                layout="responsive"
                w={200}
                h={100}
              />
            </div>
            <p className="tag">{data.tag}</p>
            <h2 className="font-black my-2">{data.name}</h2>
            <p>{data.para}</p>

            <Button
              href="#"
              text="Learn more"
              design="bg-violet-500 mt-4 pt-3 pb-2 px-8 text-white hover:bg-violet-700 duration-200"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SetupPerfromance;
