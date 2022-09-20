import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function Button({ href, text, visible = "", design = "bg-black text-white" }) {
  return (
    <>
      <Link href={href}>
        <a
          className={`group w-fit flex items-center justify-center gap-4 px-8 py-3
           rounded-lg ${design} `}
        >
          <p className="font-bold text-base">{text}</p>
          <div className={`flex items-center text-xl ${visible} `}>
            <BsArrowRight />
          </div>
        </a>
      </Link>
    </>
  );
}

export default Button;
