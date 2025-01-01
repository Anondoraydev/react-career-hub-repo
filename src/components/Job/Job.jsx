import { AiFillDollarCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
const Job = ({ job }) => {
	const {
		logo,
		job_title,
		company_name,
		remote_or_onsite,
		location,
		job_type,
		salary,
	} = job;
	return (
		<div className="card card-compact bg-base-100 shadow-xl">
			<figure>
				<img src={logo} alt="Shoes" className="" />
			</figure>
			<div className="card-body">
				<h2 className="card-title font-extrabold text-[24px]"> {job_title}</h2>
				<p>{company_name} </p>
				<div>
					<button className="px-6 py-2 font-extrabold border rounded text-[#9873FF] pb-4 pt-4 border-teal-200 mr-4 ">
						{remote_or_onsite}
					</button>
					<button className="px-6 py-2 font-extrabold border rounded text-[#9873FF] pb-4 pt-4 border-teal-200 mr-4">
						{job_type}
					</button>
				</div>
				<div className="mt-4 flex gap-5">
					<h2 className="flex items-center gap-2">
						<FaLocationDot className="2xl" />
						{location}
					</h2>
					<h2 className="flex items-center gap-2">
						<AiFillDollarCircle className="2xl" />
						{salary}
					</h2>
				</div>
				<div className="card-actions ">
					<button className="btn btn-primary">View Details</button>
				</div>
			</div>
		</div>
	);
};

export default Job;
