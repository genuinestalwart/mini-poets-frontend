import { Box, Container, Typography } from "@mui/material";
import readers from "@/assets/readers.png";
import views from "@/assets/views.png";
import writers from "@/assets/writers.png";

const Summary = () => {
	return (
		<Container
			component='section'
			sx={{
				alignItems: "center",
				display: "flex",
				justifyContent: "space-between",
				my: 8,
			}}>
			<Box
				alignItems='center'
				display='flex'
				flexDirection='column'
				gap={2}>
				<Box alignItems='center' display={{ md: "flex" }} gap={2}>
					<img alt='readers' className='h-16 w-16' src={readers} />
					<Typography component='h3' fontWeight={700} variant='h5'>
						10k+
					</Typography>
				</Box>

				<Typography component='p' variant='body1'>
					Regular Readers
				</Typography>
			</Box>

			<Box
				alignItems='center'
				display='flex'
				flexDirection='column'
				gap={2}>
				<Box alignItems='center' display={{ md: "flex" }} gap={2}>
					<img alt='views' className='h-16 w-16' src={views} />
					<Typography component='h3' fontWeight={700} variant='h5'>
						500+
					</Typography>
				</Box>

				<Typography component='p' variant='body1'>
					Regular Views
				</Typography>
			</Box>

			<Box
				alignItems='center'
				display='flex'
				flexDirection='column'
				gap={2}>
				<Box alignItems='center' display={{ md: "flex" }} gap={2}>
					<img alt='writers' className='h-16 w-16' src={writers} />
					<Typography component='h3' fontWeight={700} variant='h5'>
						150+
					</Typography>
				</Box>

				<Typography component='p' variant='body1'>
					Regular Writers
				</Typography>
			</Box>
		</Container>
	);
};

export default Summary;
