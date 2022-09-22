import Link from "next/link";
import { useState } from "react";

function MobMenuDropdown({ data, setIsOpen }) {
  const [open, setOpen] = useState(false);

  const openDropdown = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <>
      <div className="space-y-2">
        <p onClick={openDropdown} className="font-bold text-xl">
          {data.name}
        </p>

        {open && (
          <div className="space-y-1">
            {data.subLinks.map((data, id) => (
              <Link key={id} href={data.url}>
                <a
                  onClick={() => setIsOpen(false)}
                  className="bg-violet-50 p-2 text-base block"
                >
                  {data.name}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MobMenuDropdown;
