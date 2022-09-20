import Button from "../../tools/Button";

function Scale() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="">
          <p className="tag">FLEXIBLE AND SCALABLE</p>
          <h2 className="font-bold">From micro to large-scale</h2>
          <p>
            Different projects require different technologies. Pick a plan that
            matches your current needs, then upgrade and scale as your website
            grows.
          </p>

          <Button
            href="#"
            text="Explore all products"
            design="border-2 border-black text-black hover:border-violet-500 
            hover:text-violet-700 duration-200 rounded-none"
          />
        </div>
      </div>
    </section>
  );
}

export default Scale;
