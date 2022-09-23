import Link from "next/link";
import Img from "../tools/Img";
import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useRouter } from "next/router";
import { MdLabelImportant } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import MobileMenu from "./components/MobileMenu";
import navLink from "./Navlinks";

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
        <div className="container flex items-center justify-between">
          <Link href="/">
            <a className="w-[160px] h-[30px]">
              <Img src="/logo_blue.png" alt="Logo" />
            </a>
          </Link>

          <nav className="flex items-center gap-8">
            {navLink.map((data, id) => (
              <div key={id}>
                {data.subLinks ? (
                  <div className="hidden lg:block group">
                    <p
                      className="font-base
                  cursor-pointer hover:text-violet-700
                  font-bold pt-6 pb-5 border-b-2 border-transparent"
                    >
                      {data.name}
                    </p>
                    <div
                      className="duration-300 w-[400px] h-fit 
                      absolute left-1/2 -translate-x-1/2 bg-violet-100 p-3
                      border border-violet-500 z-20
                      pointer-events-none group-hover:pointer-events-auto
                      opacity-0 group-hover:opacity-100
                    "
                    >
                      {data.subLinks.map((link, id) => (
                        <div
                          key={id}
                          className="p-3 group hover:bg-violet-200 flex
                         gap-3 justify-start items-center peer"
                        >
                          <div className="p-2 text-xl text-violet-500 bg-white flex items-center w-fit h-fit rounded-md">
                            <MdLabelImportant />
                          </div>
                          <div className="">
                            <Link key={id} href={link.url}>
                              <a className={`font-black text-violet-900`}>
                                {link.name}
                              </a>
                            </Link>

                            <p className="text-sm">{link.details}</p>
                          </div>
                          <div className="absolute right-4 top-4 text-violet-700">
                            <AiOutlineArrowRight />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={data.url}>
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
                )}
              </div>
            ))}

            <Link href="/cpanel-login">
              <a
                className="hidden md:block font-bold bg-violet-800 hover:bg-violet-900 duration-200
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
          </nav>
        </div>
      </header>

      <MobileMenu data={navLink} setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}

export default Navbar;
