import {useState} from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api";
import {useNavigate} from 'react-router-dom';
import { motion } from "framer-motion";
    
const GoolgeLogin = (props) => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	const responseGoogle = async (authResult) => {
		try {
			if (authResult["code"]) {
				const result = await googleAuth(authResult.code);
				const {email, name, image} = result.data.user;
				const token = result.data.token;
				const obj = {email,name, token, image};
				localStorage.setItem('user-info',JSON.stringify(obj));
				navigate('/dashboard');
			} else {
				console.log(authResult);
				throw new Error(authResult);
			}
		} catch (e) {
			console.log('Error while Google Login...', e);
		}
	};

	const googleLogin = useGoogleLogin({
		onSuccess: responseGoogle,
		onError: responseGoogle,
		flow: "auth-code",
	});

	return (
		<div className="flex h-screen items-center justify-center bg-gray-100">
		<motion.button
		  onClick={googleLogin}
		  className="flex items-center gap-2 rounded-2xl bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
		  whileHover={{ scale: 1.1 }}
		  whileTap={{ scale: 0.9 }}
		>
		  <svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			width="24px"
			height="24px"
		  >
			<path
			  fill="#4285F4"
			  d="M24 9.5c3.54 0 6.63 1.17 9.06 3.12l6.77-6.77C34.93 2.2 29.71 0 24 0 14.81 0 7.08 5.16 3.28 12.64l7.99 6.21C13.07 13.41 18.14 9.5 24 9.5z"
			/>
			<path
			  fill="#34A853"
			  d="M46.53 24.56c0-1.4-.12-2.75-.34-4.06H24v8.12h12.84c-.58 2.94-2.24 5.44-4.66 7.13l7.43 5.77c4.33-4 6.92-9.91 6.92-16.96z"
			/>
			<path
			  fill="#FBBC05"
			  d="M10.28 28.83c-1.42-2.3-2.24-4.99-2.24-7.83s.82-5.53 2.24-7.83L3.28 6.43C1.16 10.14 0 14.44 0 19s1.16 8.86 3.28 12.57l7-5.74z"
			/>
			<path
			  fill="#EA4335"
			  d="M24 48c6.51 0 11.96-2.13 15.95-5.79l-7.43-5.77c-2.08 1.39-4.69 2.21-7.52 2.21-5.86 0-10.93-3.91-12.73-9.29l-7.99 6.21C7.08 42.84 14.81 48 24 48z"
			/>
		  </svg>
		  Sign in with Google
		</motion.button>
	  </div>
	);
};

export default GoolgeLogin;