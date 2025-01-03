import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
	const [jobs, setJobs] = useState([4]);
	// ata best system na jodi com data thake ta hole ai vabe data gulok dekhate pari
	const [dataLength, setDataLength] = useState(4);
	useEffect(() => {
		fetch("jobs.json")
			.then((res) => res.json())
			.then((data) => setJobs(data));
	}, []);
	return (
		<div>
			<div className="text-center ">
				<h3 className="text-5xl font-extrabold py-5">
					Featured Jobs :{jobs.length} 
				</h3>
				<p className="font-medium pb-5">
					Explore thousands of job opportunities with all the information you
					need. Its your future
				</p>
			</div>
			<div className="grid grid-cols-2 gap-36 mt-14 gp">
				{/* jodi disply te com data dekhate chai ta hole slice korte hobe */}

				{jobs.slice(0, dataLength).map((job) => (
					<Job key={job.id} job={job}></Job>
				))}
			</div>
			<div className={dataLength === jobs.length && "hidden"}>
				<button
					onClick={() => setDataLength(jobs.length)}
					className="btn btn-primary text-center mt-5	mx-auto block">
					See All Jobs
				</button>
			</div>
		</div>
	);
};

export default FeaturedJobs;
