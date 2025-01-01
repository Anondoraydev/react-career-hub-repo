import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
	return (
		<div>
			<div className="max-w-[1320px] m-auto">
				<Header />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Root;
