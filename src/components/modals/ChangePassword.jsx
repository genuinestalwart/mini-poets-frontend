import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material";
import StyledButton from "@/components/shared/StyledButton";
import { useForm } from "react-hook-form";
import InputField from "@/components/shared/InputField";
import { grey } from "@mui/material/colors";
import { useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { ToastContext } from "@/providers/ToastProvider";

const ChangePassword = ({ openChange, setOpenChange }) => {
	const [loading, setLoading] = useState(false);
	const { changePassword, logOut } = useContext(AuthContext);
	const { toast } = useContext(ToastContext);

	const field = {
		autoComplete: "off",
		id: "password",
		label: "New Password",
		type: "password",
		validation: { minLength: 8 },
	};

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async ({ password }) => {
		setLoading(true);

		try {
			await changePassword(password);
			window.location.reload();
		} catch (error) {
			if (error.code === "auth/requires-recent-login") {
				toast({
					title: "Reauthentication Needed!",
					type: "warning",
					description:
						"You must reauthenticate in order to change your password. Logging you out now so that you can login again.",
				});

				setTimeout(async () => {
					await logOut();
				}, 5000);
			}
		}
	};

	return (
		<Dialog
			className='[&_div.MuiDialog-paper]:space-y-4'
			component='form'
			fullWidth
			maxWidth='sm'
			open={openChange}
			onClose={(e, reason) => {
				if (reason !== "backdropClick") {
					setOpenChange(false);
				}
			}}
			onSubmit={handleSubmit(onSubmit)}
			sx={{ "& .MuiDialog-paper": { p: 6 } }}>
			<DialogTitle fontWeight={700} sx={{ p: 0 }}>
				Change Password
			</DialogTitle>

			<DialogContent>
				<InputField
					disabled={loading}
					errors={errors}
					field={field}
					register={register}
				/>
			</DialogContent>

			<DialogActions sx={{ p: 0 }}>
				<StyledButton
					disabled={loading}
					sx={{
						bgcolor: grey[400],
						color: "secondary.main",
					}}
					onClick={() => {
						setOpenChange(false);
						reset();
					}}>
					Cancel
				</StyledButton>

				<StyledButton disabled={loading} type='submit'>
					Update
				</StyledButton>
			</DialogActions>
		</Dialog>
	);
};

export default ChangePassword;
