import React from "react";
import {Bar, Line} from "react-chartjs-2";
import Skeleton from "react-loading-skeleton";
import {Card, PageHeader, Typography, DatePicker} from "antd";

const {Text} = Typography;

const spanStyle = {
	fontWeight: "bold",
	marginRight: 5
};

const textStyle = {
	marginRight: 20
};

const DataByDayComponent = (props) => {
	const {barData, handleChange, totalData, isLoading, error, date} = props;
	const {endDate} = date;
	return (
		<>
			<Card title="Cases By Day" extra={<DatePicker onChange={handleChange} style={{border: "none"}} />}
				  className="dataByDay-card">
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
									style={{paddingLeft:0}}
									className="site-page-header"
									title="Date: "
									subTitle={`${endDate}`}
								/>
								<Line data={barData}
									  type="stepped"
									 options={{
									 	responsive: true,
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
													 labelString: "Province",
													 fontSize: 15,
													 padding: 20
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

export default DataByDayComponent;
