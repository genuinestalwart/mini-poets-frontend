import RootLayout from "@/layouts/RootLayout";
import AboutUsPage from "@/pages/about-us";
import ContactUsPage from "@/pages/contact-us";
import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import PoemsPage from "@/pages/poems";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "@/routes/PrivateRoute";
import DashLayout from "@/layouts/DashLayout";
import DashboardPage from "@/pages/account/dashboard";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "about-us", element: <AboutUsPage /> },
			{ path: "contact-us", element: <ContactUsPage /> },
			{ path: "login", element: <LoginPage /> },
			{ path: "poems", element: <PoemsPage /> },
		],
	},
	{
		path: "/account",
		element: (
			<PrivateRoute>
				<DashLayout />
			</PrivateRoute>
		),
		children: [{ index: true, element: <DashboardPage /> }],
	},
]);
