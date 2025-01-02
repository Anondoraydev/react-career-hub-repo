const getStordJobAppliction = () => {
	const stordJobAppliction = localStorage.getItem("job-applictions");
	if (stordJobAppliction) {
		return JSON.parse(stordJobAppliction);
	}
	return [];
};

const saveJobAppliction = (id) => {
	const stordJobApplictions = getStordJobAppliction();
	const exists = stordJobApplictions.find((jobId) => jobId === id);
	if (!exists) {
		stordJobApplictions.push(id);
		localStorage.setItem(
			"job-applictions",
			JSON.stringify(stordJobApplictions)
		);
	}
};   

export { getStordJobAppliction, saveJobAppliction };

