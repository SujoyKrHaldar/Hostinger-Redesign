import Link from "next/link";
import Img from "../tools/Img";
import { HiMenuAlt3 } from "react-icons/hi";

function CustomNavbar() {
  return (
    <>
      <header className="absolute inset-0 py-9 w-full h-fit z-10">
        <div className="container flex items-center justify-between gap-4">
          <Link href="/">
            <a className="inline-block w-[150px] h-[30px]">
              <Img src="/logo_white.webp" alt="Logo" />
            </a>
          </Link>

          <div className="cursor-pointer text-3xl hover:text-violet-700 duration-200">
            <HiMenuAlt3 />
          </div>
        </div>
      </header>
    </>
  );
}

export default CustomNavbar;
