import { useEffect, useState } from "react";
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
						<span>
							{job.job_title}
							{job.company_name} : {job.remote_or_onsite}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AppliedJobs;
