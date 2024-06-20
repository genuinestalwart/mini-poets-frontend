import useAuth from "@/hooks/useAuth";
import { Edit } from "@mui/icons-material";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import EditUsername from "@/components/modals/EditUsername";
import ChangePassword from "@/components/modals/ChangePassword";

const ProfilePage = () => {
	const [openEdit, setOpenEdit] = useState(false);
	const [openChange, setOpenChange] = useState(false);
	const { user } = useAuth();

	const data = [
		{
			ariaLabel: "update username",
			defaultValue: user?.displayName,
			id: "username",
			onClick: () => setOpenEdit(true),
			text: "Username",
			type: "text",
		},
		{
			ariaLabel: "change email",
			defaultValue: user?.email,
			id: "email",
			onClick: () => {},
			text: "Email",
			type: "email",
		},
		{
			ariaLabel: "change password",
			defaultValue: "password",
			id: "password",
			onClick: () => setOpenChange(true),
			text: "password",
			type: "password",
		},
	];

	return (
		<Box component='main' my={8}>
			<Card
				sx={{
					maxWidth: { xs: "90%", md: "60%", lg: "40%" },
					mx: "auto",
				}}>
				<CardContent className='space-y-6'>
					<img
						alt={user?.displayName}
						className='block h-48 mx-auto rounded-full w-48'
						src={user?.photoURL}
					/>

					<Box className='space-y-2'>
						{data.map((item, i) => (
							<Box alignItems='center' display='flex' key={i}>
								<Typography
									display={{ xs: "none", md: "block" }}
									fontWeight={600}
									minWidth='10ch'
									variant='body1'>
									{item.text}
								</Typography>

								<input
									autoComplete='off'
									className='disabled:bg-secondary/5 input input-bordered px-3 py-1 rounded-lg disabled:text-secondary/60 w-full'
									defaultValue={item.defaultValue}
									id={item.id}
									disabled
									type={item.type}
								/>

								<IconButton
									aria-label={item.ariaLabel}
									color='accent'
									onClick={item.onClick}
									sx={{
										ml: "auto",
										visibility:
											i === 1 ? "hidden" : "visible",
									}}>
									<Edit />
								</IconButton>
							</Box>
						))}
					</Box>
				</CardContent>
			</Card>

			<EditUsername openEdit={openEdit} setOpenEdit={setOpenEdit} />

			<ChangePassword
				openChange={openChange}
				setOpenChange={setOpenChange}
			/>
		</Box>
	);
};

export default ProfilePage;
