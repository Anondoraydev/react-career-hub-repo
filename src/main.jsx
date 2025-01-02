import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import JobDetelis from "./components/JobDetelis/JobDetelis";
import Root from "./components/Root/Root";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/applied",
				element: <AppliedJobs />,
			},
			{
				path: "/job/:id",
				element: <JobDetelis />,
				loader: () => fetch("../jobs.json"), //akhane ai vabe sob data ak sonnge sob data loed kora thik na j tuku data lagbe sei tuku data akhan theke lod korte hobe
			},
		],
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
