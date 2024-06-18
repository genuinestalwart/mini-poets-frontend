import useAuth from "@/hooks/useAuth";
import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const { loading, user } = useAuth();

	return loading ? (
		<CircularProgress color='accent' />
	) : user ? (
		<>{children}</>
	) : (
		<Navigate to='/login' />
	);
};

export default PrivateRoute;
