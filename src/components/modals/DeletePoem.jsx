import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import StyledButton from "@/components/shared/StyledButton";
import { useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const DeletePoem = ({ item, openDelete, refetch, setOpenDelete }) => {
	const [loading, setLoading] = useState(false);
	const axiosSecure = useAxiosSecure();

	const handleDelete = async () => {
		setLoading(true);
		await axiosSecure.delete(`/poems/${item._id}`);
		await refetch();
		setOpenDelete(false);
		setLoading(false);
	};

	return (
		<Dialog
			className='[&_div.MuiDialog-paper]:space-y-4'
			component='form'
			fullWidth
			maxWidth='sm'
			open={openDelete}
			onClose={() => setOpenDelete(false)}
			sx={{ "& .MuiDialog-paper": { p: 6 } }}>
			<DialogTitle fontWeight={700} sx={{ p: 0 }}>
				Delete This Poem
			</DialogTitle>

			<DialogContent>
				<DialogContentText>
					Are you sure you want to delete this poem? This action
					cannot be undone.
				</DialogContentText>
			</DialogContent>

			<DialogActions sx={{ p: 0 }}>
				<StyledButton
					disabled={loading}
					sx={{
						bgcolor: grey[400],
						color: "secondary.main",
					}}
					onClick={() => setOpenDelete(false)}>
					Cancel
				</StyledButton>

				<StyledButton
					color='error'
					disabled={loading}
					onClick={() => handleDelete()}
					sx={{ color: "primary.main" }}>
					Delete
				</StyledButton>
			</DialogActions>
		</Dialog>
	);
};

export default DeletePoem;
