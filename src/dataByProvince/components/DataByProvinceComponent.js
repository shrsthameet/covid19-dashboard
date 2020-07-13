import React from "react";
import {Card, DatePicker, PageHeader, Typography} from "antd";
import {Bar} from "react-chartjs-2";
import Skeleton from "react-loading-skeleton";

const {RangePicker} = DatePicker;
const {Text} = Typography;

const spanStyle = {
	fontWeight: "bold",
	marginRight: 5
};

const textStyle = {
	marginRight: 20
};

const DataByProvinceComponent = (props) => {
	const {barData, handleChange, totalData, isLoading, error, date} = props;
	const {startDate, endDate} = date;
	return (
		<>
			<Card title="Cases By Province" extra={<RangePicker onChange={handleChange} style={{border: "none"}}/>}
				  className="province-card">
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
									subTitle={`${startDate} / ${endDate}`}
								/>
								<Bar data={barData}
									 options={{
										 scales: {
											 yAxes: [{
												 scaleLabel: {
													 display: true,
													 labelString: "Number of Cases",
													 fontSize: 14,
												 }
											 }],
											 xAxes: [{
												 scaleLabel: {
													 display: true,
													 labelString: "Province",
													 fontSize: 14,
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


export default DataByProvinceComponent;
