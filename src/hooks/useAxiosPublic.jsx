import axios from "axios";

const axiosPublic = axios.create({
	baseURL: "https://mini-poets-backend.vercel.app",
});

const useAxiosPublic = () => axiosPublic;
export default useAxiosPublic;
