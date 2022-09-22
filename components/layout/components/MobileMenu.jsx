import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";
import MobMenuDropdown from "./MobMenuDropdown";

function MobileMenu({ data, setIsOpen, isOpen }) {
  return (
    <section
      className="w-screen h-full fixed top-0 right-0 z-50
      overflow-hidden pointer-events-none flex items-center justify-end"
    >
      <div
        className={`flex-1 px-12 py-8 h-full max-w-[460px] bg-white border-l-2 border-violet-500
          flex items-center justify-start pointer-events-auto duration-300 overflow-scroll
          ${
            isOpen
              ? " translate-x-0 opacity-100 duration-200"
              : " translate-x-full opacity-0 duration-200"
          }
        
          `}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="absolute z-10 p-1 bg-violet-500 text-white 
          rounded-lg top-7 right-5 cursor-pointer text-3xl"
        >
          <MdOutlineClose />
        </div>

        <div className="space-y-5 w-full">
          <p className="tag">Menu</p>
          {data.map((link, id) => (
            <>
              {link.subLinks ? (
                <MobMenuDropdown key={id} data={link} setIsOpen={setIsOpen} />
              ) : (
                <Link href={link.url}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className="block font-bold text-xl"
                  >
                    {link.name}
                  </a>
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
