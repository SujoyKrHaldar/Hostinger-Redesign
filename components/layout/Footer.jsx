import FooterTop from "./components/FooterTop";

function Footer() {
  return (
    <footer className="py-8 bg-violet-700">
      <div className="container">
        <FooterTop />
        <div
          className="flex items-center justify-between gap-4 flex-wrap
         text-violet-100 pt-8 border-t border-violet-50"
        >
          <p>
            © 2004-2022 hostinger.in - India’s #1 Web Hosting & Domains
            provider.
          </p>
          <p>Prices are listed without VAT</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
