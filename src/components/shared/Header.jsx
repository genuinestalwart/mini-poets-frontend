import { Box, Container, IconButton, Typography } from "@mui/material";
import logo from "@/assets/logo.png";
import { useContext, useState } from "react";
import { Menu } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { AuthContext } from "@/providers/AuthProvider";
import NavDrawer from "@/components/shared/NavDrawer";
import Navbar from "@/components/shared/Navbar";

const links = [
	{ path: "/", text: "Home" },
	{ path: "/poems", text: "Poems" },
	{ path: "/about-us", text: "About Us" },
	{ path: "/contact-us", text: "Contact Us" },
];

const Header = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const { loading, logOut, user } = useContext(AuthContext);

	const linkItems = links.map((item, i) => (
		<NavLink
			className={({ isActive }) =>
				`font-semibold py-2 md:py-0 rounded text-center w-full md:w-auto ${
					isActive
						? "bg-accent md:bg-transparent md:text-accent"
						: "hover:bg-secondary md:hover:bg-transparent md:hover:text-secondary md:hover:underline underline-offset-2"
				}`
			}
			key={i}
			to={item.path}>
			{item.text}
		</NavLink>
	));

	return (
		<Container
			className='h-16'
			component='header'
			sx={{
				alignItems: "center",
				display: "flex",
				justifyContent: "space-between",
			}}>
			<Box alignItems='center' display='flex' gap={2} height='100%'>
				<img alt='logo' className='h-4/5 w-auto' src={logo} />

				<Typography fontWeight={600} variant='h4'>
					<span className='text-accent'>Mini</span>Poets
				</Typography>
			</Box>

			<Navbar
				linkItems={linkItems}
				loading={loading}
				logOut={logOut}
				user={user}
			/>

			<IconButton
				aria-label='open drawer'
				color='inherit'
				onClick={() => setNavbarOpen(!navbarOpen)}
				sx={{ display: { md: "none" } }}>
				<Menu fontSize='large' />
			</IconButton>

			<NavDrawer
				linkItems={linkItems}
				loading={loading}
				logOut={logOut}
				navbarOpen={navbarOpen}
				setNavbarOpen={setNavbarOpen}
				user={user}
			/>
		</Container>
	);
};

export default Header;
