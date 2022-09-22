import Ssl from "../icons/Ssl";
import Access from "../icons/Access";
import Migration from "../icons/Migration";
import Optimization from "../icons/Optimization";
import Cloud from "../icons/Cloud";
import { TbFileCertificate } from "react-icons/tb";
import { SiWordpress } from "react-icons/si";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { RiInstallLine } from "react-icons/ri";
import Server from "../icons/Server";

const services = [
  {
    name: "Free SSL",
    icon: <Ssl />,
  },
  {
    name: "Access Management",
    icon: <Access />,
  },
  {
    name: "eCommerce Optimization",
    icon: <Optimization />,
  },
  {
    name: "Free Migration",
    icon: <Migration />,
  },
  {
    name: "Automated backups",
    icon: <Server />,
  },
  {
    name: "DDoS Protection",
    icon: <Cloud />,
  },
  {
    name: "PHP Speed Boost",
    icon: "PHP",
  },

  {
    name: "LiteSpeed Cache Plugin",
    icon: <IoSpeedometerOutline />,
  },

  {
    name: "One-Click WordPress Installation",
    icon: <SiWordpress />,
  },

  {
    name: "24/7/365 Tech Support",
    icon: <BiSupport />,
  },

  {
    name: "Auto Script Installer",
    icon: <RiInstallLine />,
  },

  {
    name: "99.9% Uptime Guarantee",
    icon: <TbFileCertificate />,
  },
];

function Services() {
  return (
    <section className="py-16">
      <div className="container">
        <div className=" text-center">
          <p className="tag">our Services</p>
          <h2 className="font-bold">
            What we will{" "}
            <span className="font-black text-violet-700">Offer</span>
          </h2>

          <div className="grid grid-cols-6 mt-6 gap-[1px] bg-violet-200 p-[1px]">
            {services.map((data, id) => (
              <div key={id} className="text-center p-6 bg-white">
                <div
                  className="font-bold flex items-center justify-center
                 text-violet-500 w-[50px] mx-auto mb-4 p-2 rounded-lg bg-white text-2xl 
                 "
                >
                  {data.icon}
                </div>
                <p className="font-bold">{data.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
