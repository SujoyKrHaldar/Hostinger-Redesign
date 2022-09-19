import Link from "next/link";
import Img from "../tools/Img";

function CustomNavbar() {
  return (
    <>
      <header className="absolute inset-0 py-9 w-full h-fit z-10">
        <div className="container">
          <Link href="/">
            <a className="inline-block w-[150px] h-[30px]">
              <Img src="/logo_white.webp" alt="Logo" />
            </a>
          </Link>
        </div>
      </header>
    </>
  );
}

export default CustomNavbar;
