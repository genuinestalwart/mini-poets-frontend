import { Box, Container, IconButton, Typography } from "@mui/material";
import logo from "@/assets/logo.png";
import { Facebook, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
	return (
		<Box
			bgcolor='secondary.light'
			color='primary.main'
			component='footer'
			py={4}>
			<Container
				sx={{
					alignItems: "center",
					display: { md: "flex" },
					justifyContent: "space-between",
				}}>
				<Box
					alignItems='center'
					display='flex'
					gap={2}
					justifyContent='center'>
					<img alt='logo' className='h-12 w-auto' src={logo} />

					<Typography variant='body1'>
						Copyright &copy; 2024 - All right reserved
					</Typography>
				</Box>

				<Box
					alignItems='center'
					display='flex'
					gap={2}
					justifyContent='center'>
					<IconButton
						aria-label='twitter'
						sx={{ ":hover": { bgcolor: "accent.main" } }}>
						<Twitter color='primary' fontSize='large' />
					</IconButton>

					<IconButton
						aria-label='youtube'
						sx={{ ":hover": { bgcolor: "accent.main" } }}>
						<YouTube color='primary' fontSize='large' />
					</IconButton>

					<IconButton
						aria-label='facebook'
						sx={{ ":hover": { bgcolor: "accent.main" } }}>
						<Facebook color='primary' fontSize='large' />
					</IconButton>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
