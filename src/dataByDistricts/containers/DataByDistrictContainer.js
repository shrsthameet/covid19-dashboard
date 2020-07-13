import React, {useEffect, useState} from "react";
import "../css/dataByDistrict.css";
import _ from "lodash";
import Axios from "axios";
import {config} from "../../config";
import {currentDate} from "../../currentDate";
import DataByDistrictComponent from "../components/DataByDistrictComponent";

const BASE_URL = `${config.BASE_URL}`;

const DataByDistrictContainer = () => {
	//	States
	const [isLoading, setIsLoading] = useState(false);
	const [date, setDate] = useState({
		startDate: "2020-01-01",
		endDate: currentDate || ""
	});
	const [lineData, setLineData] = useState({});
	const [error, setError] = useState(null);

	//	Handle date change
	const handleChange = (value, dateString) => {
		setDate({...date, startDate: dateString[0], endDate: dateString[1]});
	};

	//	Destructure date state
	const {startDate, endDate} = date;

	//	URL
	const url = `${BASE_URL}/fetch?filter=casesBetween&type=aggregate&sDate=${startDate}&eDate=${endDate}&disease=COVID-19`;

	let totalDistrictData = [];
	let allDistrictList = [];

	//	Async function to fetch data and set data to Bar Chart
	const fetchDataByDistrict = async () => {
		setIsLoading(true);

		try {
			const response = await Axios.get(url);
			const data = await response.data;

			//	Grouped by district
			const groupedByDistrict = _.groupBy(data, (district) => district.District);

			//	Name of district in an array
			let districtList = Object.keys(groupedByDistrict);
			//	Removing every 1st three number and whitespace from a district data
			const allDistrictList = districtList.map(data => data.substr(3).trim());


			for (let key in groupedByDistrict) {
				//	Get the data of male
				const value = groupedByDistrict[key].map(data => parseInt(data.Value));

				const sumOfEachDistrict = value.reduce((sum, currentValue) => {
					return sum + currentValue;
				}, 0);
				// console.log(sumOfEachDistrict)
				totalDistrictData.push(sumOfEachDistrict);
			}

			setLineData({
				labels: allDistrictList,
				datasets: [
					{
						label: "Total Data",
						data: totalDistrictData,
						backgroundColor: "rgba(255,0,51,0.3)",
						borderWidth: 1,
						pointBorderWidth: 1,
						pointBackgroundColor: "yellow",
						stack: "2",
					},
				]
			});
			setIsLoading(false);
		}
		catch (err) {
			const error = await err.request.response;
			setError(error);
		}
	};

	//	Fetch url and load doughnot chart on component mount
	useEffect(() => {
		fetchDataByDistrict();
	}, [url]);
	return (
		<div className="district-section">
			<DataByDistrictComponent
				lineData={lineData}
				handleChange={handleChange}
				isLoading={isLoading}
				error={error}
				date={date}
			/>
		</div>
	);
};

export default DataByDistrictContainer;
