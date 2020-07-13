import React, {useEffect, useState} from "react";
import "../css/ageGroup.css";
import {currentDate} from "../../currentDate";
import {config} from "../../config";
import _ from "lodash";
import Axios from "axios";
import DataByAgeGroupComponent from "../components/DataByAgeGroupComponent";

const BASE_URL = `${config.BASE_URL}`;

const DataByAgeGroupContainer = () => {
	//	States
	const [isLoading, setIsLoading] = useState(false);
	const [date, setDate] = useState({
		startDate: "2020-01-01",
		endDate: currentDate || ""
	});
	const [totalData, setTotalData] = useState(0);
	const [barData, setBarData] = useState({});
	const [error, setError] = useState(null);

	//	Handle date change
	const handleChange = (value, dateString) => {
		setDate({...date, startDate: dateString[0], endDate: dateString[1]});
	};

	//	Destructure date state
	const {startDate, endDate} = date;

	//	URL
	const url = `${BASE_URL}/fetch?filter=casesBetween&type=aggregate&sDate=${startDate}&eDate=${endDate}&disease=COVID-19`;

	//	Async function to fetch data and set data to Bar Chart
	const fetchDataByAgeGroup = async () => {
		setIsLoading(true);

		let totalAgeGroupData = [];
		let allAgeGroup = [];

		try {
			const response = await Axios.get(url);
			const data = await response.data;

			//	Total Data
			const totalDataOfCountry = data.reduce((sum, currentValue) => {
				return sum + parseInt(currentValue.Value);
			}, 0);
			setTotalData(totalDataOfCountry);

			//	Group data by province
			const groupedByAgeGroup = _.groupBy(data, (province) => province.Age);

			//	Name of district in an array
			allAgeGroup = Object.keys(groupedByAgeGroup);

			for (let key in groupedByAgeGroup) {
				//	Get the data of male
				const value = groupedByAgeGroup[key].map(data => parseInt(data.Value));
				// console.log("value", value);

				const sumOfEachAgeGroup = value.reduce((sum, currentValue) => {
					return sum + currentValue;
				}, 0);
				// console.log(sumOfEachDistrict)
				totalAgeGroupData.push(sumOfEachAgeGroup);
			}


			setBarData({
				labels: allAgeGroup,
				datasets: [
					{
						label: "Total Data",
						data: totalAgeGroupData,
						backgroundColor: "rgba(244,157,231,0.6)",
					},
				]
			});
			setIsLoading(false);

			// console.log(totalAgeGroupData);

		}
		catch (err) {
			const error = await err.request.response;
			setError(error);
			setIsLoading(false);
		}
	};

	//	Fetch url and load bar chart on component mount
	useEffect(() => {
		fetchDataByAgeGroup();
	}, [url]);
	return (
		<div className="ageGroup-section">
			<DataByAgeGroupComponent data={date} barData={barData} date={date} isLoading={isLoading} error={error}
									 handleChange={handleChange}
									 totalData={totalData}
			/>
		</div>
	);
};

export default DataByAgeGroupContainer;
