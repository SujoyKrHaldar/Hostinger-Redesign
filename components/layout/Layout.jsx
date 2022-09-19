import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <section>{children}</section>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
