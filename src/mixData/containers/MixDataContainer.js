import React, {useEffect, useState} from "react";
import "../css/mixData.css";
import Axios from "axios";
import {config} from "../../config";
import DeathsAndNewCasesComponent from "../components/DeathsAndNewCasesComponent";
import RecoveredAndConfirmedComponent from "../components/RecoveredAndConfirmedComponent";

const API_URL = `${config.TOTAL_DATA_URL}`;

const MixDataContainer = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [totalDeaths, setTotalDeaths] = useState("");
	const [confirmedCases, setConfirmedCases] = useState("");
	const [totalRecovered, setTotalRecovered] = useState("");
	const [newCases, setNewCases] = useState("");
	const [polarData, setPolarData] = useState({});
	const [polarData2, setPolarData2] = useState({});
	const [error, setError] = useState("");

	//	Async function to fetch data and set data to Bar Chart
	const fetchTotalData = async () => {
		setIsLoading(true);

		try {
			const response = await Axios.get(`${API_URL}`);
			const data = await response.data;

			let totalRecoveredData;
			let confirmedCasesData;
			let totalDeathsData;
			let newCasesData;

			totalRecoveredData = data.nepal.extra1;
			setTotalRecovered(totalRecoveredData);
			confirmedCasesData = data.nepal.positive;
			setConfirmedCases(confirmedCasesData);
			totalDeathsData = data.nepal.deaths;
			setTotalDeaths(totalDeathsData);
			newCasesData = data.nepal.today_newcase;
			setNewCases(newCasesData);

			setPolarData({
				labels: [
					"Total Deaths",
					"New Cases",
				],
				datasets: [{
					label: false,
					backgroundColor: ["rgba(245,34,45,0.7)", "rgba(250,173,20,0.6)"],
					data: [totalDeathsData, newCasesData]
				}],
				label: ["My First dataset", "2nd"],
			});
			setPolarData2({
				labels: [
					"Total Recovered",
					"Confirmed cases",
				],
				datasets: [{
					label: false,
					backgroundColor: ["rgb(199,242,204)", "rgb(246,56,66)"],
					data: [totalRecoveredData, confirmedCasesData]
				}],
				label: ["My First dataset", "2nd"],
			});
			setIsLoading(false);
		}
		catch (err) {
			setError("Error while loading. Data Please try again later.");
		}
	};

	useEffect(() => {
		fetchTotalData();
	}, []);

	return (
		<>
			<RecoveredAndConfirmedComponent
				totalRecovered={totalRecovered}
				confirmedCases={confirmedCases}
				isLoading={isLoading}
				error={error}
				polarData2={polarData2}
			/>
			<DeathsAndNewCasesComponent
				isLoading={isLoading}
				error={error}
				polarData={polarData}
				totalDeaths={totalDeaths}
				newCases={newCases}
			/>
		</>
	);
};

export default MixDataContainer;
