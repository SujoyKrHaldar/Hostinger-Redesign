import Link from "next/link";
import { MdOutlineClose, MdKeyboardArrowDown } from "react-icons/md";

function MobileMenu({ data, setIsOpen, isOpen }) {
  return (
    <section className="block lg:hidden fixed top-0 left-0 w-screen h-screen z-50 ">
      <div
        className={`max-w-[600px] ml-auto h-full p-10 bg-white 
      flex items-center border-2 border-violet-500 ${
        isOpen ? "translate-x-full" : "translate-x-0"
      }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="absolute p-1 bg-violet-500 text-white 
          rounded-lg top-5 right-10 cursor-pointer text-3xl"
        >
          <MdOutlineClose />
        </div>
        <div className="space-y-4 w-full">
          {data.map((link, id) => (
            <>
              {link.subLinks ? (
                <div key={id} className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-bold text-2xl">{link.name}</p>
                    <div className="text-2xl">
                      <MdKeyboardArrowDown />
                    </div>
                  </div>

                  <div className="p-4 border-l-2 border-black space-y-2">
                    {link.subLinks.map((data, id) => (
                      <Link key={id} href={data.url}>
                        <a className=" text-lg block">{data.name}</a>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link href={link.url}>
                  <a className="inline-block font-bold text-2xl">{link.name}</a>
                </Link>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MobileMenu;
