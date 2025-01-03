// import { useEffect, useState } from "react";

// const CatagoryList = () => {
// 	const [jobCatagore, setJobCatagore] = useState([]);
// 	useEffect(() => {
// 		fetch("categories.json")
// 			.then((res) => res.json())
// 			.then((data) => setJobCatagore(data));
// 	}, []);
// 	return (
// 		<div>
// 			<h2 className="text-5xl text-center font-extrabold py-5">
// 				Category List
// 			</h2>
// 			<p className="text-center font-medium pb-5">
// 				Explore thousands of job opportunities with all the information you
// 				need. Its your future
// 			</p>
// 			{/* card */}
// 			<div className="card bg-neutral text-neutral-content w-96">
// 				<div className="card-body items-center text-center">
// 					<h2 className="card-title">Cookies!</h2>
// 					<p>We are using cookies for no reason.:{jobCatagore.logo}</p>
// 					<div className="card-actions justify-end">
// 						<button className="btn btn-primary">
// 							Accept {jobCatagore.category_name}
// 						</button>
// 						<button className="btn btn-ghost">Deny</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default CatagoryList;

import { useEffect, useState } from "react";

const CatagoryList = () => {
	const [jobCatagore, setJobCatagore] = useState([]); // Initialize as an empty array

	useEffect(() => {
		fetch("categories.json")
			.then((res) => res.json())
			.then((data) => setJobCatagore(data));
	}, []);

	return (
		<div>
			<h2 className="text-5xl text-center font-extrabold py-5">
				Category List
			</h2>
			<p className="text-center font-medium pb-5">
				Explore thousands of job opportunities with all the information you
				need. It's your future!
			</p>
			{/* Cards */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-5 ">
				{jobCatagore.map((category) => (
					<div key={category.id} className="card text-neutral-content ">
						<div className="card bg-neutral text-neutral-content p-5 ">
							<img
								src={category.logo}
								alt=""
								className="w-[40px] h-[40px] bg-gray-200 m-5 "
							/>
							<h2>{category.category_name}</h2>
							<p>{category.availability}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CatagoryList;
