import { useState } from "react";
import { AiFillEye } from "react-icons/ai";

function LoginForm({ className }) {
  const [type, setType] = useState("password");
  //   const [error, setError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    // if (!email) {
    //   setError(true);
    //   return;
    // }
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
            className="w-full py-3 px-4 border border-gray-300 
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
            className="w-full py-3 px-4 border border-gray-300 
            focus:border-violet-700 outline-none"
            type={type}
          />
          <div
            onClick={setHidden}
            className={`absolute bottom-3 right-3 text-2xl m-0 cursur-pointer duration-200 ${
              type === "text" ? "text-violet-700" : "text-gray-300"
            } `}
          >
            <AiFillEye />
          </div>
          {/* {error && <p className="text-red-500">Password error.</p>} */}
        </div>

        <input
          type="submit"
          value="Login"
          className="bg-violet-800 hover:bg-violet-900 duration-200 text-white 
          p-3 w-full font-bold cursor-pointer"
        />

        <a
          href="#"
          className="text-violet-700 font-bold block md:hover:text-violet-900"
        >
          Forget password?
        </a>
      </form>
    </>
  );
}

export default LoginForm;
