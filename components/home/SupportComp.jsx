import Img from "../tools/Img";

const imgSrc = [
  {
    url: "/assets/wordpress-logo.png",
  },
  {
    url: "/assets/litespeed-logo.png",
  },
  {
    url: "/assets/cloudflare-logo.png",
  },
];

function SupportComp() {
  return (
    <section className="py-8 xl:py-4">
      <div className="container">
        <div
          className="bg-white xl:shadow-md flex flex-wrap items-center justify-center md:justify-between xl:justify-evenly 
        py-8 xl:border-2 border-violet-100 xl:translate-y-[-60%] gap-16"
        >
          {imgSrc.map((data, id) => (
            <div key={id} className="inline-block w-[200px]">
              <Img
                src={data.url}
                alt="Logo"
                className="grayscale opacity-50"
                layout="responsive"
                w={200}
                h={45}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupportComp;
