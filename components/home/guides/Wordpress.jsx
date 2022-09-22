import Button from "../../tools/Button";
import Img from "../../tools/Img";

function Wordpress() {
  return (
    <section className="py-16 bg-violet-200 z-10 border-b-2 border-violet-300">
      <div className="absolute top-0 right-0 w-[500px] h-full -z-10">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-violet-200 z-10"></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-violet-200 z-10"></div>
        <Img src="/assets/pattern-2.svg" alt="pattern" />
      </div>

      <div className="container">
        <div className="xl:h-[350px] xl:flex items-center justify-between gap-4">
          <div className="max-w-md  sm:mx-auto sm:text-center xl:text-left xl:mx-0">
            <p className="tag">GREAT WORDPRESS EXPERIENCE</p>
            <h2 className="font-bold my-2">
              {" "}
              <span className="font-black text-violet-800">WordPress</span> made
              easy
            </h2>
            <p>
              Start your website with an automatic 1-click WordPress
              installation. The backend is powered by LiteSpeed caching and
              advanced optimization to ensure your websites are fast, reliable
              and secure.
            </p>

            <Button
              href="#"
              text="Learn more"
              design="bg-violet-500 mt-4 pt-3 pb-2 px-8 text-white hover:bg-violet-700 
              duration-200 sm:mx-auto xl:mx-0"
            />
          </div>

          <div className="xl:absolute -bottom-16 right-0 w-full max-w-[600px] mx-auto">
            <Img
              src="/assets/wordpress-preview.png"
              alt="wordpress"
              layout="responsive"
              w={600}
              h={426}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] -z-10">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-violet-200 z-10"></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-violet-200 z-10"></div>
        <Img src="/assets/pattern-2.svg" alt="pattern" />
      </div>
    </section>
  );
}

export default Wordpress;
