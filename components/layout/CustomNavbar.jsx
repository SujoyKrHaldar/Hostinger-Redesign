import Link from "next/link";
import Img from "../tools/Img";
import { HiMenuAlt3 } from "react-icons/hi";

function CustomNavbar() {
  return (
    <>
      <header className="absolute inset-0 py-9 w-full h-fit z-10">
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

          <div className="cursor-pointer text-3xl p-1 bg-white rounded-md text-black duration-200">
            <HiMenuAlt3 />
          </div>
        </div>
      </header>
    </>
  );
}

export default CustomNavbar;
