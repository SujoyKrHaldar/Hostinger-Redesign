import Head from "next/head";
import Login from "../components/login/Login";

Head;

function login() {
  return (
    <>
      <Head>
        <title>Login to Hostinger</title>
        <meta name="description" content="Login to Hostinger." />
      </Head>

      <Login />
    </>
  );
}

export default login;
