import { useEffect, useState } from "react";
import Job from "../Job/Job";

 
const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data)) 
    },[])
    return (
			<div>
				<div className="text-center ">
					<h3 className="text-5xl font-extrabold py-5">
						Featured Jobs :{jobs.length}{" "}
					</h3>
					<p className="font-medium pb-5">
						Explore thousands of job opportunities with all the information you
						need. Its your future
					</p>
			</div>
			<div>
				{
					jobs.map(job => <Job key={job.id} job={job}></Job>)
				}
			</div>
			</div>
		);
};

export default FeaturedJobs;