import Img from "../../tools/Img";
import {
  GrFacebook,
  GrLinkedin,
  GrInstagram,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";
import Link from "next/link";

const social = [
  {
    icon: <GrFacebook />,
    url: "/",
  },
  {
    icon: <GrLinkedin />,
    url: "/",
  },
  {
    icon: <GrInstagram />,
    url: "/",
  },
  {
    icon: <GrTwitter />,
    url: "/",
  },
  {
    icon: <GrYoutube />,
    url: "/",
  },
];

const hosting = [
  {
    name: "Web hosting",
    url: "/",
  },
];

function FooterTop() {
  return (
    <div className="py-8 text-violet-100">
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
        <div className="w-[280px] h-[36px]">
          <Img src="/assets/payment_gateways.png" alt="payment gateways" />
        </div>

        <div className="space-y-2">
          <p className="font-bold">Follow us</p>
          <div className="flex items-center gap-4">
            {social.map((data, id) => (
              <Link href={data.url} key={id}>
                <a className="text-2xl last:text-3xl">{data.icon}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <p></p>
      </div>
    </div>
  );
}

export default FooterTop;
