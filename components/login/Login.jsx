import Img from "../tools/Img";
import LoginForm from "../form/LoginForm";
import Link from "next/link";

function Login() {
  return (
    <section className="py-16 w-full h-screen">
      <div className="absolute inset-0 w-1/2 h-full bg-black">
        <Img
          src="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Login Image"
          className="opacity-50"
        />
      </div>
      <div className="container w-full h-full flex justify-between gap-4">
        <div className="flex-1 h-full flex items-end">
          <div className="space-y-3 py-16 max-w-md text-white">
            <h1>
              Login to{" "}
              <span className="font-bold block text-7xl">Hostinger</span>
            </h1>
            <p className=" max-w-xs">
              Go online with Hostinger and get started now. Make your perfect
              website today.
            </p>
          </div>
        </div>

        <div className="flex-1 h-full flex items-center">
          <div className="space-y-4 ml-auto max-w-sm">
            <p className="text-4xl font-semibold">Login</p>

            <LoginForm className="w-full" />

            <p className="font-bold">
              Not a member yet?{" "}
              <Link href="/">
                <a className="text-violet-700">Choose a hosting plan </a>
              </Link>
              and get started now!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
