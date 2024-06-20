import { Box, Container, Typography } from "@mui/material";
import copyright from "@/assets/copyright.svg";
import { Link } from "react-router-dom";
import StyledButton from "@/components/shared/StyledButton";

const GetStarted = () => {
	return (
		<Container
			component='section'
			sx={{
				alignItems: "center",
				display: { md: "flex" },
				justifyContent: "space-between",
				py: 12,
			}}>
			<img
				alt='writer'
				className='mx-auto md:mx-0 w-4/5 md:w-1/2'
				src={copyright}
			/>

			<Box className='space-y-4' width={{ xs: "100%", md: "40%" }}>
				<Typography component='h1' fontWeight={800} variant='h3'>
					Protecting Your Poetic Rights
				</Typography>

				<Typography variant='body1'>
					Our platform treasures the creativity of our poets and
					strongly respects their intellectual property. We enforce
					strict copyright policies to protect each poem from
					unauthorized use, ensuring a secure and respectful space
					where your unique voice is honored.
				</Typography>

				<Link className='block' to='/about-us'>
					<StyledButton
						sx={{
							boxShadow: 0,
							"&:hover": { boxShadow: 0 },
						}}>
						Read More
					</StyledButton>
				</Link>
			</Box>
		</Container>
	);
};

export default GetStarted;
