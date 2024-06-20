import { Link, NavLink } from "react-router-dom";
import {
	Avatar,
	Box,
	CircularProgress,
	IconButton,
	Menu,
	MenuItem,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import StyledButton from "@/components/shared/StyledButton";
import { useState } from "react";

const dashLinks = [
	{ path: "/account", text: "Dashboard" },
	{ path: "/account/profile", text: "Profile" },
	{ path: "/account/my-poems", text: "My Poems" },
];

const Navbar = ({ linkItems, loading, logOut, user }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	return (
		<Box
			alignItems='center'
			component='nav'
			display={{ xs: "none", md: "flex" }}
			gap={4}>
			{linkItems}

			{loading ? (
				<CircularProgress color='accent' />
			) : user ? (
				<IconButton
					onClick={(e) => setAnchorEl(e.currentTarget)}
					size='small'
					sx={{ ml: 2 }}
					aria-controls={open ? "account-menu" : undefined}
					aria-haspopup='true'
					aria-expanded={open ? "true" : undefined}>
					<Avatar alt={user?.displayName} src={user?.photoURL} />
				</IconButton>
			) : (
				<Link className='block' to='/login'>
					<StyledButton
						sx={{
							boxShadow: 0,
							"&:hover": { boxShadow: 0 },
						}}>
						Login
					</StyledButton>
				</Link>
			)}

			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={() => setAnchorEl(null)}
				transformOrigin={{
					horizontal: "right",
					vertical: "top",
				}}
				anchorOrigin={{
					horizontal: "right",
					vertical: "bottom",
				}}>
				{dashLinks.map((item, i) => (
					<NavLink
						className={({ isActive }) =>
							`font-semibold ${
								isActive
									? "bg-accent md:bg-transparent md:text-accent"
									: "hover:bg-secondary md:hover:bg-transparent md:hover:text-secondary"
							}`
						}
						end
						key={i}
						to={item.path}>
						<MenuItem onClick={() => setAnchorEl(null)}>
							{item.text}
						</MenuItem>
					</NavLink>
				))}

				<MenuItem
					onClick={async () => {
						setAnchorEl(null);
						await logOut();
					}}>
					<StyledButton
						color='error'
						endIcon={<Logout />}
						sx={{
							boxShadow: 0,
							color: "primary.main",
							"&:hover": { boxShadow: 0 },
						}}>
						Log Out
					</StyledButton>
				</MenuItem>
			</Menu>
		</Box>
	);
};

export default Navbar;
