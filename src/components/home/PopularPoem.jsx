import { Box, Typography } from "@mui/material";

const PopularPoem = () => {
	return (
		<Box
			className="bg-[url('./assets/summer-evening.jpg')]"
			component='section'
			my={8}
			sx={{
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
			<Box
				className='bg-secondary/60 space-y-4'
				color='primary.main'
				py={12}
				textAlign='center'>
				<Typography
					color='accent.main'
					component='h2'
					fontWeight={700}
					variant='h4'>
					Summer Evening
				</Typography>

				<Typography
					component='h3'
					fontStyle='italic'
					fontWeight={500}
					variant='h5'>
					Evelyn Carter
				</Typography>

				<Typography variant='body1'>
					In the hush of twilight&apos;s embrace,
					<br />
					Golden hues paint the sky&apos;s face.
					<br />
					Whispers of a breeze softly play,
					<br />
					Chasing the remnants of a sunlit day.
					<br />
					<br />
					The stars awaken, one by one,
					<br />
					A symphony begins, dusk&apos;s song begun.
					<br />
					Shadows lengthen, night&apos;s gentle art,
					<br />
					Cradling the world as day departs.
				</Typography>
			</Box>
		</Box>
	);
};

export default PopularPoem;
