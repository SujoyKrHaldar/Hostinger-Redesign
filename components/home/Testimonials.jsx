import Img from "../tools/Img";

function Testimonials() {
  return (
    <section className="py-16">
      <div className="container text-center">
        <p className="tag">Connecting people</p>
        <h2 className="font-black">Get in connect with more and more people</h2>
        <p>With our best service, make it easy for user to touch them. </p>

        <div className="w-full max-w-[600px] mx-auto h-[346px]">
          <Img src="/assets/domain-connection.png" alt="pattern" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
