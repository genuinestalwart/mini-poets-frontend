import NotFound from "@/components/shared/NotFound";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import {
	Box,
	Card,
	CardContent,
	CircularProgress,
	Container,
	Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import profilePic from "@/assets/profile.png";
import moment from "moment";

const PoemPage = () => {
	const { id } = useParams();
	const axiosPublic = useAxiosPublic();
	const axiosSecure = useAxiosSecure();

	const { data: poem = null, isLoading: PoemLoading } = useQuery({
		queryKey: ["poem", id],
		queryFn: async () => {
			const res = await axiosPublic.get(`/poems/${id}`);
			return res.data;
		},
	});

	const { data: author = null, isLoading: AuthorLoading } = useQuery({
		enabled: !!poem,
		queryKey: ["author", poem],
		queryFn: async () => {
			const res = await axiosSecure.get(`/author/${poem.writtenBy}`);
			return res.data;
		},
	});

	const times = [
		{ text: "Published:", value: moment.unix(poem?.createdAt).fromNow() },
		{ text: "Last Edited:", value: moment.unix(poem?.updatedAt).fromNow() },
	];

	return PoemLoading || AuthorLoading ? (
		<Box
			alignItems='center'
			className='min-h-[calc(100vh_-_4rem)]'
			display='flex'
			justifyContent='center'>
			<CircularProgress color='accent' />
		</Box>
	) : poem ? (
		<Container className='min-h-[calc(100vh_-_4rem)]'>
			<Box
				className='grid-cols-1 md:grid-cols-3'
				sx={{ display: "grid", gap: 8, py: 8 }}>
				<Card className='md:col-span-2'>
					<CardContent>
						<Typography
							fontWeight={600}
							component='h1'
							variant='h3'>
							{poem.title}
						</Typography>

						<hr className='mb-4 mt-2 w-full' />

						<Typography component='pre' variant='body1'>
							{poem.lines}
						</Typography>
					</CardContent>
				</Card>

				<Card>
					<CardContent className='space-y-4'>
						<img
							alt={author.name}
							className='block h-32 mx-auto rounded-full w-32'
							src={profilePic}
						/>

						<Typography
							fontWeight={700}
							textAlign='center'
							variant='h5'>
							{author.name}
						</Typography>

						<Box>
							{times.map((item, i) => (
								<Box
									alignItems='center'
									className='max-w-max mx-auto'
									display='flex'
									key={i}>
									<Typography
										fontWeight={600}
										minWidth='10ch'
										variant='body1'>
										{item.text}
									</Typography>

									<Typography variant='body1'>
										{item.value}
									</Typography>
								</Box>
							))}
						</Box>
					</CardContent>
				</Card>
			</Box>
		</Container>
	) : (
		<NotFound />
	);
};

export default PoemPage;
