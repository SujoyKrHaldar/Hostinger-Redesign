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

const helperLink = [
  {
    name: "Turorials",
    url: "/",
  },

  {
    name: "Knowledge base",
    url: "/",
  },

  {
    name: "Report ",
    url: "/",
  },

  {
    name: "Privacy policy",
    url: "/",
  },

  {
    name: "terms and condition",
    url: "/",
  },
];

function FooterMiddle() {
  return (
    <div className="text-violet-100 py-4 space-y-8 md:space-y-0 md:flex items-end justify-between gap-4">
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

      <div className="flex items-center justify-start gap-y-1 gap-x-4 flex-wrap">
        {helperLink.map((data, id) => (
          <Link href={data.url} key={id}>
            <a className="block text-sm md:hover:underline">{data.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FooterMiddle;
