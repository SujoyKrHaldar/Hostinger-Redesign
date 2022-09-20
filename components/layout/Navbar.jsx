import Link from "next/link";
import Img from "../tools/Img";
import { useRouter } from "next/router";

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
  const router = useRouter();

  return (
    <>
      <header className="absolute inset-0 py-7 w-full h-fit z-10">
        <div className="container flex items-center justify-between gap-4">
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

            <Link href="/cpanel-login">
              <a
                className="font-bold bg-violet-800 hover:bg-violet-900 duration-200
               text-white pt-3 pb-2 mb-1 px-8 rounded-lg"
              >
                Login
              </a>
            </Link>
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
