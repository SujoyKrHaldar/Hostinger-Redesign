function LoginForm({ className }) {
  return (
    <>
      <form className={`space-y-4 ${className}`}>
        <div className="space-y-1">
          <p>Email</p>
          <input
            className="w-full py-3 px-4 border border-gray-300 
            focus:border-violet-700 outline-none"
            type="email"
          />
          {/* <p>Email error.</p> */}
        </div>

        <div className="space-y-1">
          <p>Password</p>
          <input
            className="w-full py-3 px-4 border border-gray-300 
            focus:border-violet-700 outline-none"
            type="password"
          />
          {/* <p>Password error.</p> */}
        </div>

        <input
          type="submit"
          value="Login"
          className="bg-violet-800 text-white p-3 w-full font-bold"
        />

        <a href="#" className="text-violet-700 font-bold block">
          Forget password?
        </a>
      </form>
    </>
  );
}

export default LoginForm;
