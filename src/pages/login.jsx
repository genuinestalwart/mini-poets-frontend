import Signin from "@/components/login/Signin";
import Signup from "@/components/login/Signup";
import useAuth from "@/hooks/useAuth";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { AuthContext } from "@/providers/AuthProvider";
import { Box, CircularProgress } from "@mui/material";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
	const [login, setLogin] = useState(true);
	const [authing, setAuthing] = useState(false);
	const navigate = useNavigate();
	const axiosPublic = useAxiosPublic();
	const { loading, user } = useAuth();
	const { createUser, loginUser, loginWithGoogle, updateUser, verifyEmail } =
		useContext(AuthContext);

	const onSignup = async (data) => {
		setAuthing(true);
		const res = await createUser(data.email, data.password);
		await updateUser({ displayName: data.name });
		// await verifyEmail();

		await axiosPublic.post("/users", {
			email: res.user?.email,
			name: res.user?.displayName,
			uid: res.user?.uid,
		});

		navigate("/account", { replace: true });
	};

	const onSignin = async (data) => {
		setAuthing(true);
		await loginUser(data.email, data.password);
		navigate("/account", { replace: true });
	};

	const handleGoogle = async () => {
		setAuthing(true);
		const res = await loginWithGoogle(setAuthing);

		if (res?.user) {
			await axiosPublic.post("/users", {
				email: res.user?.email,
				name: res.user?.displayName,
				uid: res.user?.uid,
			});

			navigate("/account", { replace: true });
		}
	};

	return loading ? (
		<Box
			alignItems='center'
			className='h-[calc(100vh_-_4rem)]'
			display='flex'
			justifyContent='center'>
			<CircularProgress color='accent' />
		</Box>
	) : !user ? (
		<Box
			alignItems='center'
			className='min-h-[calc(100vh_-_4rem)]'
			component='main'
			display='flex'
			justifyContent='center'
			py={8}>
			{login ? (
				<Signin
					authing={authing}
					handleGoogle={handleGoogle}
					loading={loading}
					onSubmit={onSignin}
					setLogin={setLogin}
				/>
			) : (
				<Signup
					authing={authing}
					handleGoogle={handleGoogle}
					loading={loading}
					onSubmit={onSignup}
					setLogin={setLogin}
				/>
			)}
		</Box>
	) : (
		<Navigate to='/account' />
	);
};

export default LoginPage;
