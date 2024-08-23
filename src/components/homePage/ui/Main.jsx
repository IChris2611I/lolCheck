import { Outlet } from "react-router-dom";

export default function Main() {
	return (
		<div className=" bg-blue-400 h-full w-full col-start-4 col-span-full row-start-4 row-span-10">
			<Outlet />
		</div>
	);
}
