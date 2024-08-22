import Main from "./components/homePage/ui/Main";
import Nav from "./components/homePage/ui/Nav";
import Section from "./components/homePage/ui/Section";

export default function App() {
	return (
		<div className="h-screen w-screen bg-cover bg-lol grid grid-cols-12 grid-rows-12 ">
			<div className="bg-black/50 backdrop-blur-sm col-span-full row-span-full" />
			<div className="h-full w-full grid grid-cols-12 grid-rows-12 col-start-2 col-span-10 row-start-2 row-span-9 rounded-tl-xl rounded-bl-xl backdrop-blur-xl bg-black/10 border border-white/20">
				<Section className="backdrop-blur-2xl bg-black/60" />
				<Nav />
				<Main />
			</div>
		</div>
	);
}
