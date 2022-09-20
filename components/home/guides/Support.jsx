import Button from "../../tools/Button";

function Support() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="">
          <p className="tag">24/7 Support</p>
          <h2 className="font-bold">Always by your side </h2>
          <p>
            We provide services 24 hours a day, 365 days a year. Our team of
            experts will solve technical issues to get your websites up and
            running. Anytime.
          </p>

          <Button
            href="#"
            text="Contact us"
            design="border-2 border-black text-black hover:border-violet-500 
            hover:text-violet-700 duration-200 rounded-none"
          />
        </div>
      </div>
    </section>
  );
}

export default Support;
