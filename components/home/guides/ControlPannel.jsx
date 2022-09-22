import Button from "../../tools/Button";
import Img from "../../tools/Img";

const features = [
  {
    name: "Ease of Use",
    desp: "Hostinger Panel is extremely user-friendly and can be used by those with little experience in website development.",
  },
  {
    name: "Powerful",
    desp: "A wide variety of tools to satisfy advanced user and website developer needs.",
  },
  {
    name: "WordPress Optimized",
    desp: "Get more speed, better SEO, visitor retention and conversions with our custom-built WP optimization.",
  },
];

function ControlPannel() {
  return (
    <section className="py-16">
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] -z-10">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-white z-10"></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white z-10"></div>
        <Img src="/assets/pattern-2.svg" alt="pattern" />
      </div>

      <div className="container">
        <div className="space-y-2">
          <p className="tag">Easy dashboard</p>
          <h2 className="font-bold">
            User-Friendly{" "}
            <span className="font-black text-violet-700">Control Panel</span>
          </h2>
          <p className="max-w-lg ">
            We provide a host of tools designed to streamline your day-to-day
            administration tasks. From our user-friendly control panel you can
            create new mailboxes, databases, edit files and more.
          </p>
          <div className="py-4 flex gap-4 justify-start">
            {features.map((data, id) => (
              <div
                key={id}
                className="max-w-[230px] space-y-1 bg-gradient-to-r border-2
                   border-violet-100 from-violet-100 to-violet-50 p-5"
              >
                <p className="font-bold">{data.name}</p>
                <p className="text-sm">{data.desp}</p>
              </div>
            ))}
          </div>

          <Button
            href="#"
            text="Get started"
            design="bg-violet-500 pt-3 pb-2 px-8 text-white hover:bg-violet-700 duration-200"
          />
        </div>

        <div
          className="absolute -top-16 -right-44 w-full max-w-[874px] h-[400px] 
        -z-10 border-2 border-violet-50 bg-violet-50"
        >
          <div className="absolute w-1/3 h-full inset-0 bg-gradient-to-r from-white z-10"></div>
          <Img src="/assets/dashboard-preview.png" alt="Dashboard preview" />
        </div>
      </div>
    </section>
  );
}

export default ControlPannel;
