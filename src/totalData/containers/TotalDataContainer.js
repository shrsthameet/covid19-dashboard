import React, {useState, useEffect} from "react";
import "../css/totalData.css";
import {config} from "../../config";
import Axios from "axios";
import TotalDataComponent from "../components/TotalDataComponent";
import Skeleton from "react-loading-skeleton";
import {currentDate} from "../../currentDate";

const BASE_URL = `${config.BASE_URL}`;

const TotalDataContainer = () => {
	//	States
	const [isLoading, setIsLoading] = useState(false);
	const [date, setDate] = useState({
		startDate: "2020-06-01",
		endDate: currentDate || ""
	});
	const [totalCase, setTotalCase] = useState(0);
	const [totalMaleCase, setTotalMaleCase] = useState(0);
	const [totalFemaleCase, setTotalFemaleCase] = useState(0);
	const [pieData, setPieData] = useState({});
	const [error, setError] = useState(null);

	//	Handle Date Change
	const handleChange = (value, dateString) => {
		setDate({...date, startDate: dateString[0], endDate: dateString[1]});
	};

	//	Destructure date state
	const {startDate, endDate} = date;

	//	URL
	const url = `${BASE_URL}/fetch?filter=casesBetween&type=aggregate&sDate=${startDate}&eDate=${endDate}&disease=COVID-19`;

	//	Async function to fetch data and set data to Pie Chart
	async function fetchAllData() {
		setIsLoading(true);

		try {
			const response = await Axios.get(url);
			const totalCountryData = await response.data;

			//	Filtering total male and total female data from the response
			const totalMaleData = totalCountryData.filter((data) => data.Sex === "Male");
			const totalFemaleData = totalCountryData.filter((data) => data.Sex === "Female");

			//	Total data of the country
			const totalDataOfCountry = totalCountryData.reduce((sum, currentValue) => {
				return sum + parseInt(currentValue.Value);
			}, 0);
			setTotalCase(totalDataOfCountry);

			//	Total male data of the country
			const totalMaleCountryData = totalMaleData.reduce((sum, currentValue) => {
				return sum + parseInt(currentValue.Value);
			}, 0);
			setTotalMaleCase(totalMaleCountryData);

			//	Total female data of the country
			const totalFemaleCountryData = totalFemaleData.reduce((sum, currentValue) => {
				return sum + parseInt(currentValue.Value);
			}, 0);
			setTotalFemaleCase(totalFemaleCountryData);

			//	Set data to doughnot chart
			setPieData({
				labels: ["male", "female"],
				datasets: [
					{
						data: [totalMaleCountryData, totalFemaleCountryData],
						backgroundColor: ["pink", "yellow"],
						borderCapStyle: "square",
					},
				],
			});
			setIsLoading(false);
		}
		catch (err) {
			const error = await err.request.response;
			setError(error);
		}
	}

	//	Fetch url and load doughnot chart on component mount
	useEffect(() => {
		fetchAllData();
	}, [url]);
	return (
		<div className="totalData-section">
			<TotalDataComponent
				handleChange={handleChange}
				pieData={pieData}
				totalDataOfCountry={totalCase}
				totalMaleCase={totalMaleCase}
				totalFemaleCase={totalFemaleCase}
				date={date}
				isLoading={isLoading}
				error={error}
			/>
		</div>
	);
};

export default TotalDataContainer;
