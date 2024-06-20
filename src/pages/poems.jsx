import PoemCard from "@/components/shared/PoemCard";
import StyledButton from "@/components/shared/StyledButton";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { Search } from "@mui/icons-material";
import { Box, CircularProgress, Container, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const PoemsPage = () => {
	const [loading, setLoading] = useState(false);
	const [searchText, setSearchText] = useState("");
	const location = useLocation();
	const navigate = useNavigate();
	const axiosPublic = useAxiosPublic();

	const { data = [], isLoading } = useQuery({
		queryKey: ["poems", location.search],
		queryFn: async () => {
			const search = location.search.split("=")[1];

			const res = await axiosPublic.get(
				search ? `/poems?search=${search}` : "/poems"
			);

			setLoading(false);
			return res.data;
		},
	});

	const onSearch = async () => {
		setLoading(true);
		navigate(`/poems?search=${searchText}`);
	};

	return (
		<Container
			className='min-h-[calc(100vh_-_4rem)]'
			component='main'
			sx={{ py: 8 }}>
			<Box
				alignItems='center'
				display='flex'
				gap={8}
				maxWidth='sm'
				mx='auto'>
				<TextField
					disabled={loading}
					color='accent'
					fullWidth
					id='search'
					onChange={(e) => setSearchText(e.target.value)}
					size='medium'
					sx={{ bgcolor: "primary.main" }}
					type='text'
					variant='outlined'
				/>

				<StyledButton
					disabled={loading}
					onClick={() => onSearch()}
					size='large'
					startIcon={<Search />}
					sx={{
						boxShadow: 0,
						color: "primary.main",
						"&:hover": { boxShadow: 0 },
					}}>
					Search
				</StyledButton>
			</Box>

			{isLoading ? (
				<Box
					alignItems='center'
					className='min-h-[calc(100vh_-_4rem)]'
					display='flex'
					justifyContent='center'>
					<CircularProgress color='accent' />
				</Box>
			) : data.length ? (
				<Box
					className='grid-cols-1 md:grid-cols-2'
					display='grid'
					gap={8}
					my={8}>
					{data.toReversed().map((item, i) => (
						<PoemCard
							cardActions={
								<Link to={`/poems/${item._id}`}>
									<StyledButton>Read More</StyledButton>
								</Link>
							}
							item={item}
							key={i}
						/>
					))}
				</Box>
			) : (
				<Box
					alignItems='center'
					className='h-[calc(50vh)]'
					display='flex'
					justifyContent='center'>
					No Data Found
				</Box>
			)}
		</Container>
	);
};

export default PoemsPage;
