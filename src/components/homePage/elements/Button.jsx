export default function Button({ text, img, className }) {
  return (
    <div
      className={`w-full flex justify-between relative items-center border-y border-white/10 bg-[#FFFFFF1A] hover:bg-slate-800 text-white p-3 ${className}`}
    >
      <div>
        <span className="font-normal tracking-wider">{text}</span>
      </div>
      <div className="w-10 h-10">
        <img src={img} alt={text} className="object-contain" />
      </div>
    </div>
  );
}
