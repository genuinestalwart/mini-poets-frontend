import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import "@fontsource/mukta";
import { RouterProvider, ScrollRestoration } from "react-router-dom";
import { router } from "@/routes/Routes";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme.config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@/providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import ToastProvider from "@/providers/ToastProvider";
const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<ThemeProvider theme={theme}>
				<ToastProvider>
					<AuthProvider>
						<HelmetProvider>
							<RouterProvider router={router}>
								<ScrollRestoration />
							</RouterProvider>
						</HelmetProvider>
					</AuthProvider>
				</ToastProvider>
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
