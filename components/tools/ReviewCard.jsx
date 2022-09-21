import Img from "./Img";

function ReviewCard({ title, desc, name }) {
  return (
    <div className="rounded-lg overflow-hidden text-left p-7 bg-violet-600 text-white z-10">
      <div className="absolute top-0 right-0 w-[200px] h-[200px] -z-10">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-violet-600 z-10"></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-violet-600 z-10"></div>
        <Img src="/assets/pattern-4.svg" alt="Pattern" className="opacity-20" />
      </div>
      <p className="font-bold text-2xl mb-2">{title}</p>
      <p className="text-sm text-violet-50 mb-6">{desc}</p>
      <div className="space-y-1">
        <p className="font-bold">{name}</p>
        <p className="text-xs">{new Date().toDateString()}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
