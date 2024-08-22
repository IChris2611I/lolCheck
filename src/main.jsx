import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import ErrorPage from "./Error.jsx";
import Lol from "./components/homePage/ui/gameDiv/Lol.jsx";
import Tft from "./components/homePage/ui/gameDiv/Tft.jsx";
import RuinedKing from "./components/homePage/ui/gameDiv/RuinedKing.jsx";
import ProjectL from "./components/homePage/ui/gameDiv/ProjectL.jsx";
import WildDrift from "./components/homePage/ui/gameDiv/Wild Drift.jsx";
import Runterra from "./components/homePage/ui/gameDiv/Runterra.jsx";
import Valorant from "./components/homePage/ui/gameDiv/Valorant.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "lol",
				element: <Lol />,
			},

			{
				path: "tft",
				element: <Tft />,
			},

			{
				path: "vl",
				element: <Valorant />,
			},

			{
				path: "rt",
				element: <Runterra />,
			},

			{
				path: "wd",
				element: <WildDrift />,
			},

			{
				path: "pl",
				element: <ProjectL />,
			},

			{
				path: "rk",
				element: <RuinedKing />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
