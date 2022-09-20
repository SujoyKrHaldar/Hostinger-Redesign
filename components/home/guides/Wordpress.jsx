import Button from "../../tools/Button";

function Wordpress() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="">
          <p className="tag">GREAT WORDPRESS EXPERIENCE</p>
          <h2 className="font-bold">WordPress made easy</h2>
          <p>
            Start your website with an automatic 1-click WordPress installation.
            The backend is powered by LiteSpeed caching and advanced
            optimization to ensure your websites are fast, reliable and secure.
          </p>

          <Button
            href="#"
            text="Learn more"
            design="border-2 border-black text-black hover:border-violet-500 
            hover:text-violet-700 duration-200 rounded-none"
          />
        </div>
      </div>
    </section>
  );
}

export default Wordpress;
