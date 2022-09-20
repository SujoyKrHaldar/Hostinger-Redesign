import Ssl from "../icons/Ssl";
import Access from "../icons/Access";
import Migration from "../icons/Migration";
import Optimization from "../icons/Optimization";

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
    icon: <Access />,
  },
  {
    name: "DDoS Protection",
    icon: <Access />,
  },
  {
    name: "PHP Speed Boost",
    icon: <Access />,
  },

  {
    name: "LiteSpeed Cache Plugin",
    icon: <Access />,
  },

  {
    name: "One-Click WordPress Installation",
    icon: <Access />,
  },

  {
    name: "24/7/365 Tech Support",
    icon: <Access />,
  },

  {
    name: "Auto Script Installer",
    icon: <Access />,
  },

  {
    name: "99.9% Uptime Guarantee",
    icon: <Access />,
  },
];

function Services() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="space-y-4">
          <p className="tag">our Services</p>
          <h2>
            What we will <span className="font-bold">Offer</span>
          </h2>

          <div className="flex items-center justify-center flex-wrap gap-2">
            {services.map((data, id) => (
              <div key={id} className="text-center p-6 bg-violet-50 border border-violet-100">
                <div className="text-white w-[50px] mx-auto mb-4 p-2 rounded-lg bg-violet-400">
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
