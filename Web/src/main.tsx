import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./App.tsx";
import { FullMenu } from "./pages/FullMenu";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/menu/completo",
		element: <FullMenu />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
