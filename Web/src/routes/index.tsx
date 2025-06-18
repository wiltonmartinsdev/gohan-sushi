import { Routes as RouterRoutes, Route } from "react-router-dom";

import { App } from "@/App";
import { FullMenu } from "@/pages/FullMenu";

export const Routes = () => {
	return (
		<RouterRoutes>
			<Route
				path="/"
				element={<App />}
			/>
			<Route
				path="/menu/completo"
				element={<FullMenu />}
			/>
		</RouterRoutes>
	);
};
