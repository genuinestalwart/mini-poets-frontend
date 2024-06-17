import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "login", element: <LoginPage /> },
		],
	},
]);
