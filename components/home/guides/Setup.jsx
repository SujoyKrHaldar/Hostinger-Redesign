import Button from "../../tools/Button";

function Setup() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="">
          <p className="tag">use case</p>
          <h2 className="font-bold">Easy to use and setup</h2>
          <p>
            Getting your website live is as simple as a click of a button.
            Everything you need - provided in a clear way.
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

export default Setup;
