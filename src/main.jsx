import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import "@fontsource/mukta";
import { RouterProvider, ScrollRestoration } from "react-router-dom";
import { router } from "@/routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<ScrollRestoration />
		</RouterProvider>
	</React.StrictMode>
);
