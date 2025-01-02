import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className=" absolute top-1/2 left-1/2 transform -translate-1/2">
			<h2 className="text-6xl text-red-600">Oops!!!</h2>
			<Link to="/" className="bg-teal-500 p-5 mt-5 block mx-auto text-center rounded-lg">Go back to Home</Link>
		</div>
	);
};

export default ErrorPage;
