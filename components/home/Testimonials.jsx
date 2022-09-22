import Button from "../tools/Button";
import Img from "../tools/Img";
import ReviewCard from "../tools/ReviewCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const reviews = [
  {
    title: "Great purchase and Support team!",
    desc: "Great purchase and Support team! I purchased a subscription and received a free domain along with a lot of help getting it up and going along with moving over my other domain.",
    name: "Jhon doe",
  },

  {
    title: "Over 4 months and no issues at all.",
    desc: "I'm on a 'Premium Shared Hosting' plan. I've installed several websites and everything works just fine up to this point. Great customer service too 👌 Keep it up.",
    name: "Jim doe",
  },

  {
    title: "I'm in love with Hostinger",
    desc: "I'm in love with Hostinger, from an end user's perspective to an affiliate's perspective. They have amazing support, both live chat, e-mail, and account manager. Never had any issues with hosting, and cloud hosting is extremely FAST!! I always recommend it to my clients. I've used several hosting providers, there was not one that was better than hosting in everything; control panel, support, prices, performance, etc. Again, I'm in love with hostinger!",
    name: "Jim doe json",
  },

  {
    title: "The Customer Success Team Rocks!",
    desc: "I registered the wrong web domain and needed to make some changes. I contacted Customer Success Team and gave them the required info and had my website changed to the correct domain name. Agne was the customer service rep. Once she connected, she had everything handled within 10 minutes. Fast and Efficient! I couldn't have asked for better service.",
    name: "Jeson doe",
  },

  {
    title: "Best affordable and quality hosting provider!!",
    desc: "I had an issue with registering a free domain of my choice, and the team actually responded swiftly, and with a touch of care & sympathy. I was so impressed by their commitment to user satisfaction that I will be deploying my in-production web application with Hostinger, and might actually partner with you guys.",
    name: "Jeson doe",
  },

  {
    title: "Agnė from Hostinger solved my issue in…",
    desc: "Agnė from Hostinger solved my issue in a split moment, I wrongly bought Premium Shared Hosting - under first option Web Hosting. Asked Agnė what to do, and immediately offered me refund. So went to get the WordPress Hosting with WordPress Starter package. This is exciting! Thanks for your help!",
    name: "Jeson doe",
  },
];

function Testimonials() {
  return (
    <section className="py-16 ">
      <div className="container ">
        <div className="max-w-md mx-auto mb-16 text-center">
          <p className="tag">Testimonials</p>
          <h2 className="font-black">What they say about us</h2>
          <p>
            People from 40+ countries trust their websites to Hostinger. Here’s
            what our users say in their web hosting reviews from Trustpilot, G2,
            and Google My Business:
          </p>
        </div>

        <div className="w-full h-[800px] md:h-[545px] overflow-hidden lg:h-full mb-8">
          <div className="block lg:hidden z-20 absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white"></div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="1rem">
              {reviews.map((data, id) => (
                <ReviewCard key={id} {...data} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>

        <Button
          target="_blank"
          href="https://www.trustpilot.com/review/www.hostinger.com"
          text="More reviews on Trustpilot"
          design="bg-violet-500 text-white hover:bg-violet-700 duration-200 mx-auto"
          visible="hidden"
        />
      </div>

      <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] -z-10">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white z-10"></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-white z-10"></div>
        <Img src="/assets/pattern-2.svg" alt="Pattern" />
      </div>
    </section>
  );
}

export default Testimonials;
