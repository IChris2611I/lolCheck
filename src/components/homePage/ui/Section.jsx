import ButtonList from "../elements/buttonList";

export default function SectionLeft({ className }) {
	return (
		<div
			className={`${className} h-full w-full col-span-3 row-span-full flex flex-col rounded-l-xl border-r border-white/30`}
		>
			<div className="h-1/6 w-full flex justify-center items-center">
				<a href="https://www.riotgames.com/fr">
					<img src="/logo.png" alt="logo riot game" className="w-18 h-14" />
				</a>
			</div>
			<ButtonList />
		</div>
	);
}
