import DeletePoem from "@/components/modals/DeletePoem";
import EditPoem from "@/components/modals/EditPoem";
import NewPoem from "@/components/modals/NewPoem";
import PoemCard from "@/components/shared/PoemCard";
import StyledButton from "@/components/shared/StyledButton";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Add } from "@mui/icons-material";
import { Box, CircularProgress, Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const MyPoemsPage = () => {
	const [item, setItem] = useState(true);
	const [openNew, setOpenNew] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);
	const { user } = useAuth();
	const axiosSecure = useAxiosSecure();

	const {
		data = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["poems", user?.uid],
		queryFn: async () => {
			const res = await axiosSecure.get(`/my-poems/${user.uid}`);
			return res.data;
		},
	});

	return (
		<Container className='space-y-8' component='main' sx={{ p: 8 }}>
			<StyledButton
				onClick={() => setOpenNew(true)}
				startIcon={<Add />}
				sx={{ display: "flex", ml: "auto" }}>
				New
			</StyledButton>

			<NewPoem
				openNew={openNew}
				refetch={refetch}
				setOpenNew={setOpenNew}
			/>

			{isLoading ? (
				<Box
					alignItems='center'
					className='min-h-[calc(100vh_-_10rem)]'
					display='flex'
					justifyContent='center'>
					<CircularProgress color='accent' />
				</Box>
			) : (
				<Box
					className='grid-cols-1 md:grid-cols-2'
					display='grid'
					gap={8}
					my={8}>
					{data.toReversed().map((item, i) => (
						<PoemCard
							cardActions={
								<Box className='space-x-4'>
									<StyledButton
										onClick={() => {
											setItem(item);
											setOpenEdit(true);
										}}>
										Edit
									</StyledButton>

									<StyledButton
										color='error'
										onClick={() => {
											setItem(item);
											setOpenDelete(true);
										}}
										sx={{ color: "primary.main" }}>
										Delete
									</StyledButton>
								</Box>
							}
							item={item}
							key={i}
						/>
					))}
				</Box>
			)}

			<EditPoem
				item={item}
				openEdit={openEdit}
				refetch={refetch}
				setOpenEdit={setOpenEdit}
			/>

			<DeletePoem
				item={item}
				openDelete={openDelete}
				refetch={refetch}
				setOpenDelete={setOpenDelete}
			/>
		</Container>
	);
};

export default MyPoemsPage;
