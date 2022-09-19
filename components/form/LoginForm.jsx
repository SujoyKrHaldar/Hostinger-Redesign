import Link from "next/link";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

function LoginForm({ className }) {
  const [type, setType] = useState("password");
  //   const [error, setError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    alert(password);
  };

  const setHidden = () => {
    type === "password" ? setType("text") : setType("password");
  };

  return (
    <>
      <form onSubmit={handelSubmit} className={`space-y-4 ${className}`}>
        <div className="space-y-1">
          <p>Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-3 px-4 border border-gray-400 
            focus:border-violet-700 outline-none"
            type="email"
          />
          {/* {error && <p className="text-red-500">Email error.</p>} */}
        </div>

        <div className="space-y-1">
          <p>Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-3 px-4 border border-gray-400 
            focus:border-violet-700 outline-none"
            type={type}
          />
          <div
            onClick={setHidden}
            className={`absolute bottom-3 right-3 text-2xl m-0 cursor-pointer duration-200 ${
              type === "text" ? "text-violet-700" : "text-gray-300"
            } `}
          >
            <AiFillEye />
          </div>
          {/* {error && <p className="text-red-500">Password error.</p>} */}
        </div>

        <Link href="#">
          <a className="text-violet-700 font-bold block md:hover:text-violet-900">
            Forget password?
          </a>
        </Link>

        <input
          type="submit"
          value="Login"
          className="bg-violet-800 hover:bg-violet-900 duration-200 text-white 
          p-3 w-full font-bold cursor-pointer rounded-sm"
        />

        <p>or login with</p>

        <div className="flex items-center justify-between gap-4">
          <div
            className="bg-red-100 hover:bg-red-200 duration-200 
          p-3 w-full font-bold cursor-pointer flex items-center justify-center gap-2 rounded-sm"
          >
            <div className="text-2xl">
              <FcGoogle />
            </div>
          </div>

          <div
            className="bg-blue-100 hover:bg-blue-200 duration-200 
          p-3 w-full font-bold cursor-pointer flex items-center justify-center gap-2 rounded-sm"
          >
            <div className="text-2xl text-blue-800">
              <SiFacebook />
            </div>
          </div>
        </div>

        {/* <div
          className="bg-red-50 hover:bg-red-100 duration-200 
          p-3 w-full font-bold cursor-pointer flex items-center justify-center gap-2 rounded-sm"
        >
          <div className="text-2xl">
            <FcGoogle />
          </div>
          <p className="pt-1">Continue with Google</p>
        </div>

        <div
          className="bg-blue-50 hover:bg-blue-100 duration-200 
          p-3 w-full font-bold cursor-pointer flex items-center justify-center gap-2 rounded-sm"
        >
          <div className="text-2xl text-blue-800">
            <SiFacebook />
          </div>
          <p className="pt-1">Continue with Facebook</p>
        </div> */}
      </form>
    </>
  );
}

export default LoginForm;
