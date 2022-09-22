import Img from "../tools/Img";

function ConnectingPeople() {
  return (
    <section className="pt-16 pb-4">
      <div className="container text-center">
        <div className="max-w-lg mx-auto space-y-2">
          <p className="tag">Connecting people</p>
          <h2 className="font-black leading-[2.5rem]">
            Get in connect with more and more people
          </h2>
          <p>With our best service, make it easy for user to touch them. </p>
        </div>

        <div className="w-full max-w-md mx-auto h-auto my-8">
          <Img
            src="/assets/earth-domain.png"
            w={360}
            h={366}
            alt="Domain"
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}

export default ConnectingPeople;
