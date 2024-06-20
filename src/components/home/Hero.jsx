import { Box, Container, Typography } from "@mui/material";
import writer from "@/assets/writer.svg";
import { Link } from "react-router-dom";
import StyledButton from "@/components/shared/StyledButton";

const Hero = () => {
	return (
		<Container
			className='min-h-[calc(100vh_-_4rem)]'
			component='section'
			sx={{
				alignItems: "center",
				display: "flex",
				flexDirection: { xs: "column-reverse", md: "row" },
				justifyContent: "space-between",
			}}>
			<Box className='space-y-4' width={{ xs: "100%", md: "40%" }}>
				<Typography component='h1' fontWeight={800} variant='h3'>
					Unleash Your Inner Bard
				</Typography>

				<Typography variant='body1'>
					Welcome to our poetry haven, where your voice finds its
					rhythm and your verses come to life. Publish your poems and
					share them with a world eager to listen. Join our vibrant
					community and let your words inspire.
				</Typography>

				<Link className='block' to='/poems'>
					<StyledButton
						sx={{
							boxShadow: 0,
							"&:hover": { boxShadow: 0 },
						}}>
						See For Yourself
					</StyledButton>
				</Link>
			</Box>

			<img
				alt='writer'
				className='mx-auto md:mx-0 w-4/5 md:w-1/2'
				src={writer}
			/>
		</Container>
	);
};

export default Hero;
