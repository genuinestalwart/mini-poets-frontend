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

const EditUsername = ({ openEdit, setOpenEdit }) => {
	const [loading, setLoading] = useState(false);
	const { updateUser, user } = useContext(AuthContext);

	const field = {
		autoComplete: "off",
		defaultValue: user?.displayName,
		id: "name",
		label: "New Username",
		validation: { maxLength: 32, minLength: 3 },
	};

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async ({ name }) => {
		setLoading(true);

		if (user?.displayName !== name) {
			await updateUser({ displayName: name });
			window.location.reload();
		}
	};

	return (
		<Dialog
			className='[&_div.MuiDialog-paper]:space-y-4'
			component='form'
			fullWidth
			maxWidth='sm'
			open={openEdit}
			onClose={(e, reason) => {
				if (reason !== "backdropClick") {
					setOpenEdit(false);
				}
			}}
			onSubmit={handleSubmit(onSubmit)}
			sx={{ "& .MuiDialog-paper": { p: 6 } }}>
			<DialogTitle fontWeight={700} sx={{ p: 0 }}>
				Edit Username
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
						setOpenEdit(false);
						reset();
					}}>
					Cancel
				</StyledButton>

				<StyledButton disabled={loading} type='submit'>
					Save
				</StyledButton>
			</DialogActions>
		</Dialog>
	);
};

export default EditUsername;
