import Img from "../tools/Img";
import FooterBottom from "./components/FooterBottom";
import FooterMiddle from "./components/FooterMiddle";
import FooterTop from "./components/FooterTop";

function Footer() {
  return (
    <footer className="py-8 bg-violet-700 z-10 mt-auto">
      <div className="absolute top-0 right-0 w-[30%] h-full -z-10">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-violet-700 z-10"></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-violet-700 z-10"></div>
        <Img src="/assets/pattern-4.svg" alt="Pattern" className="opacity-30" />
      </div>

      <div className="container">
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
