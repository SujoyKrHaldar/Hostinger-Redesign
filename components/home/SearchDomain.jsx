import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";

function SearchDomain() {
  const [data, setData] = useState("");

  const handelSubmit = () => {};

  return (
    <section className="py-16">
      <div className="container ">
        <div className="space-y-3 max-w-lg">
          <p className="tag">Search and buy</p>
          <h2 className="">
            Find the <span className="font-bold">Perfect Domain</span> for you.
          </h2>
          <p className="max-w-lg">
            Success starts with the domain. Enter domain name of your choice and
            pick any extension name on the next step (choose between .in, .com,
            .online, .live, .store, .info and many more)
          </p>

          <form
            className="flex items-center flex-wrap gap-2"
            onSubmit={handelSubmit}
          >
            <div className="flex-1">
              <input
                value={data}
                onChange={(e) => setData(e.target.value)}
                type="text"
                className="w-full py-3 px-4 border border-gray-400 
                focus:border-violet-700 outline-none"
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
              className="flex-1 max-w-fit bg-violet-800 border border-violet-800 hover:bg-violet-900 duration-200 text-white 
                py-3 px-6 w-full font-bold cursor-pointer rounded-sm"
            />
          </form>

          <p>.com starts from ₹299.00/mo</p>
        </div>
      </div>
    </section>
  );
}

export default SearchDomain;
