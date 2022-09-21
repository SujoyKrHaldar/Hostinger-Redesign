import Button from "../../tools/Button";
import Img from "../../tools/Img";


function Support() {
  return (
    <section className="pt-16">
      <div className="container flex items-center justify-between gap-4">
        <div className="flex-1 max-w-xl mx-auto h-[500px] border-b">
          <Img src="/assets/support.png" alt="scale" />
        </div>
        <div className="flex-1 max-w-md mx-auto">
          <p className="tag">24/7 Support</p>
          <h2 className="font-bold">
            Always by{" "}
            <span className="font-black text-violet-700">Your side</span>
          </h2>
          <p>
            We provide services 24 hours a day, 365 days a year. Our team of
            experts will solve technical issues to get your websites up and
            running. Anytime.
          </p>

          <Button
            href="#"
            text="Contact us"
            design="bg-violet-500 mt-4 pt-3 pb-2 px-8 text-white hover:bg-violet-700 duration-200"
          />
        </div>
      </div>
    </section>
  );
}

export default Support;
