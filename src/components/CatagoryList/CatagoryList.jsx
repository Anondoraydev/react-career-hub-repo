 
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
