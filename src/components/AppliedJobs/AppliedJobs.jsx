import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStordJobAppliction } from "../utility/localStorge";

const AppliedJobs = () => {
	const jobs = useLoaderData();
	useEffect(() => {
		const stordJobIds = getStordJobAppliction();
		if (jobs.length > 0) {
			const jobsApplied = jobs.filter((job) => stordJobIds.includes(job.id));
			console.log(jobs, stordJobIds, jobsApplied);
		}
	}, []);
	return (
		<div>
			<h2>Applied</h2>
		</div>
	);
};

export default AppliedJobs;
