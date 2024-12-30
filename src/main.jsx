import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element:<Home/>
      }
    ]
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);