import useAuth from "@/hooks/useAuth";
import { Box, CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const { loading, user } = useAuth();

	return loading ? (
		<Box
			alignItems='center'
			display='flex'
			height='100vh'
			justifyContent='center'>
			<CircularProgress color='accent' />
		</Box>
	) : user ? (
		<>{children}</>
	) : (
		<Navigate to='/login' />
	);
};

export default PrivateRoute;
