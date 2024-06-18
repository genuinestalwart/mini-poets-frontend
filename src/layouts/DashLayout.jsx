import Header from "@/components/shared/Header";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default DashLayout;
