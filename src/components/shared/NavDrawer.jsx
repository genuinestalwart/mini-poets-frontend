import { NavLink } from "react-router-dom";
import { Box, CircularProgress, Drawer } from "@mui/material";
import { Logout } from "@mui/icons-material";
import StyledButton from "@/components/shared/StyledButton";

const dashLinks = [{ path: "/account", text: "Dashboard" }];

const NavDrawer = ({
	linkItems,
	loading,
	logOut,
	navbarOpen,
	setNavbarOpen,
	user,
}) => {
	const dashLinkItems =
		user &&
		dashLinks.map((item, i) => (
			<NavLink
				className={({ isActive }) =>
					`font-semibold py-2 md:py-0 rounded text-center w-full md:w-auto ${
						isActive
							? "bg-accent md:bg-transparent md:text-accent"
							: "hover:bg-secondary md:hover:bg-transparent md:hover:text-secondary md:hover:underline underline-offset-2"
					}`
				}
				end
				key={i}
				onClick={() => setNavbarOpen(!navbarOpen)}
				to={item.path}>
				{item.text}
			</NavLink>
		));

	return (
		<Drawer
			classes={{ paper: "space-y-2" }}
			open={navbarOpen}
			onClose={() => setNavbarOpen(!navbarOpen)}
			sx={{
				display: { md: "none" },
				"& .MuiDrawer-paper": {
					alignItems: "center",
					display: "flex",
					flexDirection: "column",
					py: 8,
					width: "80%",
				},
			}}>
			<Box
				component='nav'
				display='flex'
				flexDirection='column'
				gap={2}
				mx='auto'
				width='80%'>
				{linkItems}
				{dashLinkItems}

				{loading ? (
					<CircularProgress color='accent' />
				) : user ? (
					<StyledButton
						color='error'
						endIcon={<Logout />}
						onClick={logOut}
						sx={{
							boxShadow: 0,
							color: "primary.main",
							"&:hover": { boxShadow: 0 },
						}}>
						Log Out
					</StyledButton>
				) : (
					<NavLink
						className={({ isActive }) =>
							`font-semibold py-2 rounded text-center w-full ${
								isActive ? "bg-accent" : "hover:bg-secondary"
							}`
						}
						end
						onClick={() => setNavbarOpen(!navbarOpen)}
						to='/login'>
						Login
					</NavLink>
				)}
			</Box>
		</Drawer>
	);
};

export default NavDrawer;
