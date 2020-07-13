import React from "react";
import {Bar} from "react-chartjs-2";
import Skeleton from "react-loading-skeleton";
import {Card, PageHeader, DatePicker, Typography} from "antd";

const {RangePicker} = DatePicker;
const {Text} = Typography;

const spanStyle = {
	fontWeight: "bold",
	marginRight: 5
};

const textStyle = {
	marginRight: 20
};

const DataByAgeGroupComponent = (props) => {
	const {barData, handleChange, isLoading, error, date, totalData} = props;
	const {startDate, endDate} = date;
	return (
		<>
			<Card title="Data By Age Group" extra={<RangePicker style={{border: "none"}} onChange={handleChange}/>}
				  className="ageGroup-card">
				{isLoading ? (
					<>
						<Skeleton height={50}/>
						<Skeleton height={350}/>
					</>
				) : (
					<>
						{error ? (<p>error.error</p>) : (
							<>
								<PageHeader
									style={{paddingLeft: 0}}
									className="site-page-header"
									title="Date: "
									subTitle={`${startDate} / ${endDate}`}
								/>
								<Bar data={barData}
									 options={{
										 scales: {
											 yAxes: [{
												 scaleLabel: {
													 display: true,
													 labelString: "Number of Cases",
													 fontSize: 15,
												 }
											 }],
											 xAxes: [{
												 scaleLabel: {
													 display: true,
													 labelString: "Age Group",
													 fontSize: 15,
													 padding: 10
												 }
											 }],
										 }
									 }}
								/>
								<div style={{marginTop: 20}}>
									<Text style={textStyle}>
										<span style={spanStyle}>
											Total Data Count:
										</span>
										{totalData}
									</Text>
								</div>
							</>
						)}
					</>
				)}
			</Card>
		</>
	);
};

export default DataByAgeGroupComponent;
