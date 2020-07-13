import React, {useState, useEffect} from "react";
import "../css/dataByProvince.css";
import _ from "lodash";
import {config} from "../../config";
import DataByProvinceComponent from "../components/DataByProvinceComponent";
import Axios from "axios";
import {currentDate} from "../../currentDate";

const BASE_URL = `${config.BASE_URL}`;

const DataBySex = () => {
	//	States
	const [isLoading, setIsLoading] = useState(false);
	const [date, setDate] = useState({
		startDate: "2020-01-01",
		endDate: currentDate || ""
	});
	const [barData, setBarData] = useState({});
	const [totalData, setTotalData] = useState(0);
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
	const fetchDataBySex = async () => {
		setIsLoading(true);

		try {
			const response = await Axios.get(url);
			const data = await response.data;

			//	Total Data
			const totalDataOfCountry = data.reduce((sum, currentValue) => {
				return sum + parseInt(currentValue.Value);
			}, 0);
			setTotalData(totalDataOfCountry);

			//	Group data by province
			const groupedByProvince = _.groupBy(data, (province) => province.Province);

			let male = [];
			let female = [];
			let allProvinceList = [];

			for (let key in groupedByProvince) {
				//	Get the data of male
				const allMale = groupedByProvince[key].filter((data) => data.Sex === "Male");
				//	Get the data of female
				const allFemale = groupedByProvince[key].filter((data) => data.Sex === "Female");
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
				allProvinceList = Object.keys(groupedByProvince);
			}

			// Stacked Bar Chart
			setBarData({
				labels: allProvinceList,
				datasets: [
					{
						label: "Male",
						data: male,
						backgroundColor: "rgba(214,233,198,0.8)",
						stack: "2",
					},
					{
						label: "Female",
						data: female,
						backgroundColor: "rgba(250,235,204,0.8)",
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

	//	Fetch url and load bar chart on component mount
	useEffect(() => {
		fetchDataBySex();
	}, [url]);

	return (
		<div className="province-section">
			<DataByProvinceComponent handleChange={handleChange} date={date} barData={barData}
									 totalData={totalData} isLoading={isLoading} error={error} />
		</div>
	);
};

export default DataBySex;
