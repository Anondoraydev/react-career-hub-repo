import { useEffect, useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { getStordJobAppliction } from "../utility/localStorge";

const AppliedJobs = () => {
	const [appliedJobs, setAppliedJobs] = useState([]);
	const jobs = useLoaderData();
	useEffect(() => {
		const stordJobIds = getStordJobAppliction();
		if (jobs.length > 0) {
			// const jobsApplied = jobs.filter((job) => stordJobIds.includes(job.id));
			// or
			const jobsApplied = [];
			for (const id of stordJobIds) {
				const job = jobs.find((job) => job.id === id);
				if (job) {
					jobsApplied.push(job);
				}
			}
			setAppliedJobs(jobsApplied);
			// console.log(jobs, stordJobIds, jobsApplied);
		}
	}, []);
	return (
		<div>
			<details className="dropdown">
				<summary className="btn m-1">open or close</summary>
				<ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
					<li>
						<a>All</a>
					</li>
					<li>
						<a> Remote</a>
					</li>
					<li>
						<a>OnSite</a>
					</li>
				</ul>
			</details>

			<h2>Jobs I applied: {appliedJobs.length}</h2>
			<ul>
				{appliedJobs.map((job) => (
					<li key={job.id}>
						<div className="flex justify-between items-center">
							<div className="flex">
								<img
									src={job.logo}
									alt=""
									className="py-16 px-5 w-[200px] mt-5 bg-gray-200 border"
								/>
								<div className="pl-5 pt-5">
									<h3 className="text-xl font-bold">{job.job_title}</h3>
									<p className="py-2 text-xl">{job.company_name}</p>
									<button className="px-6 py-2 font-extrabold border rounded text-[#9873FF] pb-4 pt-4 border-teal-200 mr-4 ">
										{job.remote_or_onsite}
									</button>
									<button className="px-6 py-2 font-extrabold border rounded text-[#9873FF] pb-4 pt-4 border-teal-200 mr-4">
										{job.job_type}
									</button>
									<div className="flex gap-8 py-5">
										<p className="flex gap-2">
											<FaLocationDot className="mt-1" /> {job.location}
										</p>
										<p className="flex gap-2">
											<AiFillDollarCircle className="mt-1" /> {job.salary}
										</p>
									</div>
								</div>
							</div>
							<button className="btn btn-primary">View Details</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AppliedJobs;
