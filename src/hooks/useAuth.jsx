import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

const useAuth = () => {
	const { loading, user } = useContext(AuthContext);
	return { loading, user };
};

export default useAuth;
