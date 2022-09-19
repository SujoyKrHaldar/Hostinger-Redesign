import Link from "next/link";
import Img from "../tools/Img";

const navLink = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Domain",
    url: "/domain",
  },
  {
    name: "Hosting",
    url: "/hosting",
  },
  {
    name: "Vps",
    url: "/vps",
  },
  {
    name: "Email",
    url: "/email",
  },
  {
    name: "Cart",
    url: "/cart",
  },
];

function Navbar() {
  return (
    <>
      <header className="absolute inset-0 py-9 w-full h-fit z-10">
        <div className="container flex items-center justify-between gap-4">
          <Link href="/">
            <a className="inline-block w-[150px] h-[30px]">
              <Img src="/logo_blue.png" alt="Logo" />
            </a>
          </Link>

          <nav className="flex items-center gap-8">
            {navLink.map((data, id) => (
              <Link key={id} href={data.url}>
                <a className="font-bold">{data.name}</a>
              </Link>
            ))}

            <Link href="/cpanel-login">
              <a
                className="font-bold bg-violet-800 hover:bg-violet-900 duration-200
               text-white py-3 px-8 rounded-sm"
              >
                Login
              </a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
