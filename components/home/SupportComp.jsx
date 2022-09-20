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
    <section className="py-4">
      <div className="container">
        <div
          className="bg-white shadow-md flex items-center justify-evenly 
        py-8 border-2 border-violet-100 translate-y-[-60%]"
        >
          {imgSrc.map((data, id) => (
            <div key={id} className="inline-block w-[200px] h-[45px]">
              <Img src={data.url} alt="Logo" className="grayscale opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupportComp;
