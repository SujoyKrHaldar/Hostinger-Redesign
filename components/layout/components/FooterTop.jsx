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
      className="py-4 text-violet-100 space-y-8
     xl:space-y-0 xl:flex items-start justify-between gap-4 "
    >
      <div className=" space-y-4 md:space-y-0 xl:space-y-4 md:flex items-start justify-between gap-4 xl:block">
        <div className="space-y-3 max-w-md">
          <div className="w-[150px] h-[30px]">
            <Img src="/logo_white.webp" alt="Logo" />
          </div>
          <p>
            We are a web hosting company with a mission to help everyone who
            goes online succeed. We accomplish this by continuously developing
            server technology, giving expert assistance, and ensuring a flawless
            online website hosting experience.
          </p>
        </div>

        <div className="space-y-3">
          <p className="font-bold">Payment methods</p>
          <div className="w-[280px] h-[36px]">
            <Img src="/assets/payment_gateways.png" alt="payment gateways" />
          </div>
          <Link href="/">
            <a className="inline-block font-sm md:hover:underline">and more</a>
          </Link>
        </div>
      </div>

      <div className="block space-y-8 sm:space-y-0 sm:flex items-start justify-between gap-8">
        <div className="space-y-3">
          <p className="font-bold text-xl underline underline-offset-8 sm:no-underline">
            Hosting
          </p>
          <div className="md:block md:space-y-2 flex items-center justify-start gap-y-1 gap-x-4 flex-wrap">
            {hosting.map((data, id) => (
              <Link href={data.url} key={id}>
                <a className="block text-sm md:hover:underline">{data.name}</a>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-bold text-xl underline underline-offset-8 sm:no-underline">
            Domain
          </p>
          <div className="md:block md:space-y-2 flex items-center justify-start gap-y-1 gap-x-4 flex-wrap">
            {domain.map((data, id) => (
              <Link href={data.url} key={id}>
                <a className="block text-sm md:hover:underline">{data.name}</a>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-bold text-xl underline underline-offset-8 sm:no-underline">
            Information
          </p>
          <div className="md:block md:space-y-2 flex items-center justify-start gap-y-1 gap-x-4 flex-wrap">
            {info.map((data, id) => (
              <Link href={data.url} key={id}>
                <a className="block text-sm md:hover:underline">{data.name}</a>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-bold text-xl underline underline-offset-8 sm:no-underline">
            Company
          </p>
          <div className="md:block md:space-y-2 flex items-center justify-start gap-y-1 gap-x-4 flex-wrap">
            {company.map((data, id) => (
              <Link href={data.url} key={id}>
                <a className="block text-sm md:hover:underline">{data.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
