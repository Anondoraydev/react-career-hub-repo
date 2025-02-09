import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { saveJobAppliction } from "../utility/localStorge";
const JobDetelis = () => {
	const jobs = useLoaderData();
	const { id } = useParams();
	const idInt = parseInt(id);
	const job = jobs.find((job) => job.id === idInt);
	const notify = () => {
		saveJobAppliction(idInt);
		toast("Wow so easy !");
	};
	return (
		<div className="pb-10">
			<Helmet>
				<title>Career Hub :{id}</title>
			</Helmet>
			<h2 className="font-extrabold text-[32px] text-center mt-10 mb-10">
				Job Details
			</h2>
			<div className="grid md:grid-cols-4">
				<div className="border md:col-span-3">
					<div className="mb-8">
						<h2 className="font-bold text-black pb-5">
							Job Description :
							<span className="font-normal">{job.job_description} </span>
						</h2>

						<h2 className="font-bold text-black pb-5">
							Job Responsibility :
							<span className="font-normal">{job.job_responsibility} </span>
						</h2>
						<h2 className="font-bold text-black pb-5">
							Job Responsibility : <br />
							<span className="font-normal">
								{job.educational_requirements}{" "}
							</span>
						</h2>
						<h2 className="font-bold text-black pb-5">
							Experiences : <br />
							<span className="font-normal">{job.experiences} </span>
						</h2>
					</div>
				</div>
				<div>
					<div className="border bg-[#e1d6ff] p-6">
						<h2 className="font-bold text-black pb-8">Job Details</h2>

						<h2 className="font-bold text-black pb-2">
							Salary :<span className="font-normal">{job.salary} </span>
						</h2>
						<h2 className="font-bold text-black pb-2">
							Job Title :<span className="font-normal">{job.job_title} </span>
						</h2>

						<h2 className="font-bold text-black pb-8">Contact Information</h2>

						<h2 className="font-bold text-black pb-2">
							Phone :
							<span className="font-normal">
								{job.contact_information.phone}
							</span>
						</h2>
						<h2 className="font-bold text-black pb-2">
							Email :
							<span className="font-normal">
								{job.contact_information.email}
							</span>
						</h2>
						<h2 className="font-bold text-black pb-2">
							Address :
							<span className="font-normal">
								{job.contact_information.address}
							</span>
						</h2>
					</div>
					<button
						onClick={notify}
						className="btn btn-primary w-full mt-5 grid place-items-center ">
						Apply Now
					</button>
					<ToastContainer />
				</div>
			</div>
		</div>
	);
};

export default JobDetelis;
