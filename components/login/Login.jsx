import Link from "next/link";
import LoginForm from "../form/LoginForm";

function Login() {
  return (
    <section className="py-16 w-full h-screen">
      <div className="absolute inset-0 w-1/2 h-full bg-gray-100"></div>
      <div className="container w-full h-full flex justify-between gap-4">
        <div className="flex-1 h-full flex items-end">
          <div className="space-y-3 py-16 max-w-md">
            <h1>
              Login to{" "}
              <span className="font-bold block text-7xl">Hostinger</span>
            </h1>
            <p>
              Go online with Hostinger, make your perfect website today.{" "}
              <Link href="/">
                <a className="text-violet-700 font-bold hover:underline">
                  Check our plans.
                </a>
              </Link>
            </p>
          </div>
        </div>

        <div className="flex-1 h-full flex items-center">
          <div className="space-y-4 ml-auto max-w-sm">
            <p className="text-4xl font-semibold">Login</p>

            <LoginForm className="w-full" />

            <p className="font-bold">
              Not a member yet?{" "}
              <a href="/" className="text-violet-700">
                Choose a hosting plan
              </a>{" "}
              and get started now!{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
