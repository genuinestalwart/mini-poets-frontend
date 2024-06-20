import FeaturedPoem from "@/components/home/FeaturedPoem";
import GetStarted from "@/components/home/GetStarted";
import Hero from "@/components/home/Hero";
import PopularPoem from "@/components/home/PopularPoem";
import Summary from "@/components/home/Summary";
import { Box } from "@mui/material";

const HomePage = () => {
	return (
		<Box component='main'>
			<Hero />
			<PopularPoem />
			<Summary />
			<FeaturedPoem />
			<GetStarted />
		</Box>
	);
};

export default HomePage;
