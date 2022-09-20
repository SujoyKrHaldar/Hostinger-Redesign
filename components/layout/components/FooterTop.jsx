import Img from "../../tools/Img";
import Link from "next/link";

const hosting = [
  {
    name: "Web hosting",
    url: "/",
  },
  {
    name: "VPS hosting",
    url: "/",
  },
  {
    name: "Minecraft server hosting",
    url: "/",
  },
  {
    name: "CyberPanel hosting",
    url: "/",
  },
  {
    name: "Wordpress hosting",
    url: "/",
  },
  {
    name: "Email hosting",
    url: "/",
  },
  {
    name: "CMS hosting",
    url: "/",
  },
  {
    name: "Ecommerce hosting",
    url: "/",
  },
  {
    name: "Free web hosting",
    url: "/",
  },
];

const domain = [
  {
    name: "Domain name search",
    url: "/",
  },

  {
    name: "Domain transfer",
    url: "/",
  },

  {
    name: "Free domain",
    url: "/",
  },

  {
    name: "XYZ domain",
    url: "/",
  },

  {
    name: "Cheap domain",
    url: "/",
  },

  {
    name: "Domain extension",
    url: "/",
  },

  {
    name: "Free SSL",
    url: "/",
  },
];

const info = [
  {
    name: "Migrate to hostinger",
    url: "/",
  },

  {
    name: "System status",
    url: "/",
  },

  {
    name: "Affiliate program",
    url: "/",
  },

  {
    name: "payment methods",
    url: "/",
  },

  {
    name: "Rewards",
    url: "/",
  },

  {
    name: "Pricing",
    url: "/",
  },

  {
    name: "review",
    url: "/",
  },
];

const company = [
  {
    name: "About us",
    url: "/",
  },
  {
    name: "our technology",
    url: "/",
  },
  {
    name: "Roadmap",
    url: "/",
  },
  {
    name: "Customar care",
    url: "/",
  },
  {
    name: "Blogs",
    url: "/",
  },
];

function FooterTop() {
  return (
    <div
      className="py-4 text-violet-100 space-y-3
     md:space-y-0 md:flex md:items-start md:justify-between gap-4 "
    >
      <div className="space-y-4 max-w-md">
        <div className="w-[150px] h-[30px]">
          <Img src="/logo_white.webp" alt="Logo" />
        </div>
        <p>
          We are a web hosting company with a mission to help everyone who goes
          online succeed. We accomplish this by continuously developing server
          technology, giving expert assistance, and ensuring a flawless online
          website hosting experience.
        </p>
        <p className="font-bold">Payment methods</p>
        <div className="w-[280px] h-[36px]">
          <Img src="/assets/payment_gateways.png" alt="payment gateways" />
        </div>
        <Link href="/">
          <a className="inline-block font-sm md:hover:underline">and more</a>
        </Link>
      </div>

      <div className="space-y-3">
        <p className="font-bold text-xl">Hosting</p>
        <div className="md:block md:space-y-2 flex items-center justify-start gap-3 flex-wrap">
          {hosting.map((data, id) => (
            <Link href={data.url} key={id}>
              <a className="block text-sm md:hover:underline">{data.name}</a>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-bold text-xl">Domain</p>
        <div className="md:block md:space-y-2 flex items-center justify-start gap-3 flex-wrap">
          {domain.map((data, id) => (
            <Link href={data.url} key={id}>
              <a className="block text-sm md:hover:underline">{data.name}</a>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-bold text-xl">Information</p>
        <div className="md:block md:space-y-2 flex items-center justify-start gap-3 flex-wrap">
          {info.map((data, id) => (
            <Link href={data.url} key={id}>
              <a className="block text-sm md:hover:underline">{data.name}</a>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-bold text-xl">Company</p>
        <div className="md:block md:space-y-2 flex items-center justify-start gap-3 flex-wrap">
          {company.map((data, id) => (
            <Link href={data.url} key={id}>
              <a className="block text-sm md:hover:underline">{data.name}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
