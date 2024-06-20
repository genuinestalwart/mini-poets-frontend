import { Card, CardActions, CardContent, Typography } from "@mui/material";

const PoemCard = ({ cardActions, item }) => {
	const { lines, title } = item;
	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}>
			<CardContent>
				<Typography
					className='line-clamp-1'
					fontWeight={600}
					component='h2'
					variant='h5'>
					{title}
				</Typography>

				<hr className='mb-4 mt-2 w-full' />

				<Typography
					className='line-clamp-3'
					component='pre'
					variant='body1'>
					{lines}
				</Typography>
			</CardContent>

			<CardActions
				sx={{
					justifyContent: "space-between",
					mb: 2,
					px: 4,
				}}>
				{cardActions}
			</CardActions>
		</Card>
	);
};

export default PoemCard;
