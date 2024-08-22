import { Link } from "react-router-dom";
import { useState } from "react";
import buttonSection from "../../../constant/buttonSection";
import Button from "../elements/Button";

export default function ButtonList() {
	const [activeButton, setActiveButton] = useState(null);

	return (
		<div className="w-full h-5/6 flex flex-col justify-between overflow-hidden">
			{buttonSection.map(({ text, img, id, link }, index) => (
				<Link key={id} to={link}>
					<Button
						text={text}
						img={img}
						className={`${
							activeButton === id ? "bg-slate-800" : "bg-[#FFFFFF1A]"
						} ${index === buttonSection.length - 1 ? "border-b-0 rounded-bl-xl" : ""}`}
						onClick={() => setActiveButton(id)}
					/>
				</Link>
			))}
		</div>
	);
}
