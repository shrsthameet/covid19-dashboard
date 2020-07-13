import React, {useEffect, useState} from "react";
import "../css/dataByDay.css";
import _ from "lodash";
import {config} from "../../config";
import Axios from "axios";
import {currentDate} from "../../currentDate";
import DataByDayComponent from "../components/DataByDayComponent";

const BASE_URL = `${config.BASE_URL}`;

const DataByDayContainer = () => {
	//	States
	const [isLoading, setIsLoading] = useState(false);
	const [date, setDate] = useState({
		endDate: currentDate || ""
	});
	const [barData, setBarData] = useState({});
	const [totalData, setTotalData] = useState(0);
	const [error, setError] = useState(null);

	//	Handle date change
	const handleChange = (value, dateString) => {
		setDate({...date, endDate: dateString});
	};

	//	Destructure date state
	const {endDate} = date;

	//	URL
	const url = `${BASE_URL}/fetch?filter=casesOfDay&type=dayByDay&eDate=${endDate}&disease=COVID-19`;

	//	Async function to fetch data and set data to Bar Chart
	const fetchDataByProvince = async () => {
		setIsLoading(true);

		try {
			const response = await Axios.get(url);
			const data = await response.data;

			//	Total Data
			const totalDataOfCountry = data.reduce((sum, currentValue) => {
				return sum + parseInt(currentValue.Value);
			}, 0);
			setTotalData(totalDataOfCountry);

			//	grouped response data by province
			const groupedProvince = _.groupBy(data, (province) => province.Province);

			let male = [];
			let female = [];
			let allProvinceList = [];

			for (let key in groupedProvince) {
				//	Get the data of male
				const allMale = groupedProvince[key].filter((data) => data.Sex === "Male");
				//	Get the data of female
				const allFemale = groupedProvince[key].filter((data) => data.Sex === "Female");
				//	Sum of all male
				const sumOfAllMale = allMale.reduce((sum, currentValue) => {
					return sum + parseInt(currentValue.Value);
				}, 0);
				//	Sum of all female
				const sumOfAllFemale = allFemale.reduce((sum, currentValue) => {
					return sum + parseInt(currentValue.Value);
				}, 0);

				male.push(sumOfAllMale);
				female.push(sumOfAllFemale);
				allProvinceList = Object.keys(groupedProvince);
			}

			// Stacked Bar Chart
			setBarData({
				labels: allProvinceList,
				datasets: [
					{
						fill: false,
						label: "Male",
						data: male,
						// backgroundColor: "rgba(214,233,198,0.6)",
						borderColor: '#EC932F',
						stacked: "2"
					},
					{
						fill: false,
						label: "Female",
						data: female,
						// backgroundColor: "rgba(250,235,204,0.6)",
						borderColor: '#7000f8',
						stacked: "2"
					},
				]
			});
			setIsLoading(false);
		}
		catch (err) {
			setError("Error While Loading");
		}
	};

	useEffect(() => {
		fetchDataByProvince();
	}, [url]);
	return (
		<div className="dataByDay-section">
			<DataByDayComponent
				isLoading={isLoading}
				barData={barData}
				date={date}
				handleChange={handleChange}
				error={error}
				totalData={totalData}
			/>
		</div>
	);
};

export default DataByDayContainer;
