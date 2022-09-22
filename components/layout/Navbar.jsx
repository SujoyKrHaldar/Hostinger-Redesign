import Link from "next/link";
import { useState, useEffect } from "react";
import Img from "../tools/Img";
import { HiMenuAlt3 } from "react-icons/hi";
import { useRouter } from "next/router";
import MobileMenu from "./components/MobileMenu";

const navLink = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Domain",
    subLinks: [
      {
        name: "Domain name search",
        details: "Find the perfect domain name.",
        url: "/",
      },
      {
        name: "WHOIS Lookup",
        details: "Lookup tool for WHOIS.",
        url: "/",
      },
      {
        name: "Domain transfer",
        details: "Want to transfer your domain in hostinger ?",
        url: "/",
      },
    ],
  },
  {
    name: "Hosting",
    subLinks: [
      {
        name: "Web hosting",
        details: "For small buisness.",
        url: "/",
      },
      {
        name: "Cloud hosting",
        details: "For large scale buisness.",
        url: "/",
      },
      {
        name: "Wordpress hosting",
        details: "For wordpress optimization.",
        url: "/",
      },
    ],
  },
  {
    name: "Vps",
    subLinks: [
      {
        name: "VPS hosting",
        details: "Dedicated resource to scale.",
        url: "/",
      },
      {
        name: "CyberPanel hosting",
        details: "Control panel with lite speed web server.",
        url: "/",
      },
      {
        name: "MineCraft hosting",
        details: "Share your minecraft experience.",
        url: "/",
      },
    ],
  },
  {
    name: "Email",
    subLinks: [
      {
        name: "Google workspace email hosting",
        details: "Get custom Emial and 30GB of storage.",
        url: "/",
      },
      {
        name: "Hostinger email hosting",
        details: "Promote your buisness with us.",
        url: "/",
      },
    ],
  },
  {
    name: "Cart",
    url: "/cart",
  },
];

function Navbar() {
  const router = useRouter();

  const [bg, setBg] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    window.scrollY > 420
      ? setBg("bg-white border-violet-200")
      : setBg("bg-transparent border-transparent");
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      <header
        className={`fixed lg:py-0 py-6 inset-0 w-full h-fit z-50 ${bg} border-b duration`}
      >
        <div className="container flex items-center justify-between gap-4">
          <Link href="/">
            <a className="inline-block w-[150px]">
              <Img
                src="/logo_blue.png"
                alt="Logo"
                layout="responsive"
                w={150}
                h={30}
              />
            </a>
          </Link>

          <nav className="flex items-center gap-8">
            {navLink.map((data, id) => (
              <Link key={id} href="/">
                <a
                  className={`hidden lg:block font-bold pt-6 pb-5 border-b-2 ${
                    router.pathname === data.url
                      ? "text-violet-700 border-violet-400"
                      : "text-black border-transparent "
                  } hover:text-violet-700`}
                >
                  {data.name}
                </a>
              </Link>
            ))}

            <div className="flex items-center gap-3">
              <Link href="/cpanel-login">
                <a
                  className="font-bold bg-violet-800 hover:bg-violet-900 duration-200
               text-white pt-3 pb-2 px-8 rounded-lg"
                >
                  Login
                </a>
              </Link>

              <div
                onClick={openMenu}
                className="lg:hidden cursor-pointer text-3xl hover:text-violet-700 duration-200"
              >
                <HiMenuAlt3 />
              </div>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu data={navLink} setIsOpen={setIsOpen} isOpen={isOpen} />

      {/* <header className="absolute inset-0 w-full h-fit z-10 bg-white">
        <div className="bg-violet-200 ">
          <div className="container flex items-center justify-between gap-4 py-3 text-sm">
            <p>English</p>
            <div className="flex gap-8 items-center">
              <Link href="/cpanel-login">
                <a className="">Cart</a>
              </Link>
              <Link href="/cpanel-login">
                <a className="font-bold">Login</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="container flex items-center justify-between gap-4 py-6">
          <Link href="/">
            <a className="inline-block w-[150px] h-[30px]">
              <Img src="/logo_blue.png" alt="Logo" />
            </a>
          </Link>

          <nav className="flex items-center gap-8">
            {navLink.map((data, id) => (
              <Link key={id} href={data.url}>
                <a
                  className={`font-bold ${
                    router.pathname === data.url
                      ? "text-violet-700"
                      : "text-black "
                  } hover:text-violet-700`}
                >
                  {data.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </header> */}
    </>
  );
}

export default Navbar;
