import Img from "../tools/Img";
import LoginForm from "../form/LoginForm";
import Link from "next/link";

function Login() {
  return (
    <section className="py-16 w-full h-screen">
      <div className="hidden xl:block  absolute top-0 right-0 w-full max-w-[700px] h-full">
        <Img
          src="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Login Image"
        />
        <h2 className="text-white font-bold w-full h-fit max-w-md absolute 
        left-1/2 bottom-28 -translate-x-1/2">
          Go online with Hostinger and get started now. Make your perfect
          website today.
        </h2>
      </div>

      <div className="container h-full flex items-center justify-center xl:justify-start">
        <div className="max-w-sm space-y-3 mt-4">
          <h2 className="font-bold">
            Login
          </h2>

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
      
    </section>
  );
}

export default Login;
