export default function Button({ text, img, className, onClick }) {
	return (
		<button
			type="button"
			className={`border-y border-white/50 w-full flex justify-between items-center bg-[#FFFFFF1A] hover:bg-slate-800 text-white p-3 ${className}`}
			onClick={onClick}
		>
			<div>
				<span className="font-normal tracking-wider">{text}</span>
			</div>
			<div className="w-10 h-10">
				<img src={img} alt={text} className="object-contain" />
			</div>
		</button>
	);
}
