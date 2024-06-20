import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import StyledButton from "@/components/shared/StyledButton";
import { useForm } from "react-hook-form";
import InputField from "@/components/shared/InputField";
import { useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import moment from "moment";

const fields = (item) => [
	{
		defaultValue: item.title,
		id: "title",
		label: "Title",
	},
	{
		defaultValue: item.lines,
		id: "lines",
		label: "Poem",
		minRows: 5,
		multiline: true,
	},
];

const EditPoem = ({ item, openEdit, refetch, setOpenEdit }) => {
	const [loading, setLoading] = useState(false);
	const axiosSecure = useAxiosSecure();

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		setLoading(true);
		const timestamp = moment().unix();
		await axiosSecure.patch(`/poems/${item._id}`, {
			createdAt: item.createdAt,
			lines: data.lines,
			title: data.title,
			updatedAt: timestamp,
			writtenBy: item.writtenBy,
		});

		await refetch();
		setOpenEdit(false);
		setLoading(false);
		reset();
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
				Edit This Poem
			</DialogTitle>

			<DialogContent>
				{fields(item).map((field, i) => (
					<InputField
						disabled={loading}
						errors={errors}
						field={field}
						key={i}
						register={register}
					/>
				))}
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
					Edit
				</StyledButton>
			</DialogActions>
		</Dialog>
	);
};

export default EditPoem;
