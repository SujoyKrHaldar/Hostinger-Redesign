import Button from "../../tools/Button";

function Performence() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="">
          <p className="tag">PERFORMANCE AND SPEED</p>
          <h2 className="font-bold">Lightning-fast websites</h2>
          <p>
            Website speed can slow or grow your business. Delight your visitors
            with a fast-loading and optimized website.
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

export default Performence;
