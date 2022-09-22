import Link from "next/link";
import { useState, useEffect } from "react";
import Img from "../tools/Img";
import { HiMenuAlt3 } from "react-icons/hi";
import { useRouter } from "next/router";

const navLink = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Domain",
    url: "/",
  },
  {
    name: "Hosting",
    url: "/",
  },
  {
    name: "Vps",
    url: "/",
  },
  {
    name: "Email",
    url: "/",
  },
  {
    name: "Cart",
    url: "/",
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
              <Link key={id} href={data.url}>
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

            <Link href="/cpanel-login">
              <a
                className="font-bold bg-violet-800 hover:bg-violet-900 duration-200
               text-white pt-3 pb-2 mb-1 px-8 rounded-lg"
              >
                Login
              </a>
            </Link>

            <div className="lg:hidden cursor-pointer text-3xl hover:text-violet-700 duration-200">
              <HiMenuAlt3 />
            </div>
          </nav>
        </div>
      </header>

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
