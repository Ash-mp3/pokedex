import { useState } from "react";

const FetchData = ({ url }) => {
	const [power, setPower] = useState();
	const FetchUrl = async (url) => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setPower(data.power);
			return power;
		} catch (error) {
			console.error("Error fetching move data:", error);
		}
	};

	FetchUrl(url);
	if (power === null) {
		return "N/A";
	} else {
		return power;
	}
};

export default FetchData;
