import React, {useEffect, useState} from "react";
import Axios from "axios";
import {Row, Col, Typography} from "antd";
import NepalTodaysData from "../components/NepalTodaysData";
import NepalTotalData from "../components/NepalTotalData";
import {config} from "../../config";
import Skeleton from "react-loading-skeleton";

const API_URL = `${config.TOTAL_DATA_URL}`;

const {Text} = Typography;

const rowStyle = {
	paddingTop: 40,
	paddingBottom: 40,
	marginBottom: 20,
	background: "#f9f9f9"
};

const NepalRecentUpdatesContainer = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [covidData, setCovidData] = useState({
		totalRecovered: "",
		totalDeaths: "",
		totalCase: "",
		totalInfected: "",
		newCase: "",
		today_recovered: "",
		today_deaths: "",
		total_pcr_test: "",
		total_rdt_test: "",
		total_isolation: "",
		total_quarantine: ""
	});
	const [error, setError] = useState("");

	//	Fetch total case API
	const fetchTotalCaseData = async () => {
		setIsLoading(true);

		try {
			const response = await Axios.get(`${API_URL}`);
			const data = await response.data;

			//	Assigning data to state
			setCovidData({
				...covidData,
				totalRecovered: data.nepal.extra1,
				totalDeaths: data.nepal.deaths,
				totalCase: data.nepal.positive,
				totalInfected: data.nepal.extra2,
				newCase: data.nepal.today_newcase,
				today_recovered: data.nepal.today_recovered,
				today_deaths: data.nepal.today_death,
				total_pcr_test: data.nepal.today_pcr,
				total_rdt_test: data.nepal.today_rdt,
				// total_isolation: data.nepal.extra1,
				// total_quarantine: data.nepal.extra1
			});
			setIsLoading(false);
		}
		catch (err) {
			setError("Error while loading data. Please try again later.");
		}
	};

	//	Fetch API on component render
	useEffect(() => {
		fetchTotalCaseData();
	}, []);

	console.log(covidData);
	return (
		<>
			<Row justify="center" style={rowStyle}>
				<Col span={22}>
					<Text style={{fontSize: 18, fontWeight: "bold", color: "black"}}>
						Nepal |
					</Text>
					<Text style={{marginLeft: 5}}>Recent Updates</Text>
				</Col>

				{isLoading ? (
					<>
						<Col span={11} style={{marginRight: 10}}>
							<Skeleton height={50} count={2}/>
							<Skeleton height={150}/>
							<Skeleton height={50}/>
						</Col>
						<Col span={11}>
							<Skeleton height={50} count={2}/>
							<Skeleton height={150}/>
							<Skeleton height={50}/>
						</Col>
					</>
				) : (
					<>
						<NepalTodaysData
							newCase={covidData.newCase}
							today_recovered={covidData.today_recovered}
							today_deaths={covidData.today_deaths}
						/>

						<NepalTotalData
							totalRecovered={covidData.totalRecovered}
							totalDeaths={covidData.totalDeaths}
							totalCase={covidData.totalCase}
							totalInfected={covidData.totalInfected}
							total_pcr_test={covidData.total_pcr_test}
							total_rdt_test={covidData.total_rdt_test}
						/>
					</>
				)}


			</Row>
		</>
	);
};

export default NepalRecentUpdatesContainer;
