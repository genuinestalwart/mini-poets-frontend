import { Box, Container } from "@mui/material";
import error404 from "@/assets/error404.svg";
import { Link } from "react-router-dom";
import StyledButton from "@/components/shared/StyledButton";

const NotFound = () => {
	return (
		<Box
			alignItems='center'
			className='min-h-[calc(100vh_-_4rem)]'
			display='flex'
			justifyContent='center'>
			<Container
				sx={{
					alignItems: "center",
					display: "flex",
					flexDirection: "column",
					gap: 2,
				}}>
				<img
					alt='page not found'
					className='block mx-auto w-1/2'
					src={error404}
				/>

				<Link to='/'>
					<StyledButton>Back To Home</StyledButton>
				</Link>
			</Container>
		</Box>
	);
};

export default NotFound;
