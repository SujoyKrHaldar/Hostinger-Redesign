import Link from "next/link";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import Img from "../tools/Img";

function SearchDomain() {
  const [data, setData] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-8 md:py-16 z-10 overflow-hidden">

      <div className="w-full md:absolute top-0 right-0 md:w-[75%] h-full -z-10">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-white z-10"></div>
        <Img
          src="/assets/earth.png"
          alt="Domain"
          layout="responsive"
          w={900}
          h={300}
        />
      </div>

      <div className="container ">
        <div className="space-y-3 max-w-lg mx-auto text-center md:mx-0 md:text-left">
          <p className="tag">Search and buy</p>
          <h2 className="font-bold">
            Find the{" "}
            <span className=" font-black text-violet-700">Perfect Domain.</span>
          </h2>
          <p className="max-w-lg">
            Success starts with the domain. Enter domain name of your choice and
            pick any extension name on the next step (choose between .in, .com,
            .online, .live, .store, .info and many more)
          </p>

          <form
            className="space-y-3 md:space-y-0 md:flex items-center gap-2"
            onSubmit={handelSubmit}
          >
            <div className="flex-1">
              <input
                value={data}
                onChange={(e) => setData(e.target.value)}
                type="text"
                className="w-full py-3 px-4 border border-violet-700 
                 outline-none"
                placeholder="Type your perfect domain here"
              />

              {data === "" ? (
                <div className="absolute text-gray-400 top-3 right-4 flex items-center text-xl">
                  <FiSearch />
                </div>
              ) : (
                <div
                  className="absolute text-gray-400 top-2 right-2 flex items-center text-3xl 
                  cursor-pointer hover:text-violet-700"
                  onClick={() => setData("")}
                >
                  <GrFormClose />
                </div>
              )}
            </div>

            <input
              type="submit"
              value="Search"
              className="flex-1 md:max-w-fit bg-violet-800 border border-violet-800 hover:bg-violet-900 duration-200 text-white 
                py-3 px-6 w-full font-bold cursor-pointer rounded-sm"
            />
          </form>

          <p>
            .com starts from ₹299.00/mo.{" "}
            <Link href="/">
              <a className="hover:underline">View price list.</a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SearchDomain;
