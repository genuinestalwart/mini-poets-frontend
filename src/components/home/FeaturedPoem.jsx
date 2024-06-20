import { Box, Typography } from "@mui/material";

const FeaturedPoem = () => {
	return (
		<Box
			className="bg-[url('./assets/first-snowfall.jpg')]"
			component='section'
			my={8}
			sx={{
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
			<Box
				className='bg-secondary/75 space-y-4'
				color='primary.main'
				py={12}
				textAlign='center'>
				<Typography
					color='accent.main'
					component='h2'
					fontWeight={700}
					variant='h4'>
					First Snowfall
				</Typography>

				<Typography
					component='h3'
					fontStyle='italic'
					fontWeight={500}
					variant='h5'>
					Lucas Bennett
				</Typography>

				<Typography variant='body1'>
					In quiet grace, the first flakes fall,
					<br />
					A whispered touch from winter&apos;s call.
					<br />
					Blanketing earth in a silken shroud,
					<br />
					Nature speaks, serene and proud.
					<br />
					<br />
					Each flake unique, a fleeting kiss,
					<br />
					Transforming landscapes into bliss.
					<br />
					In stillness, the world finds its glow,
					<br />
					As dreams take flight in the soft, white snow.
				</Typography>
			</Box>
		</Box>
	);
};

export default FeaturedPoem;
