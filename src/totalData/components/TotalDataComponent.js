import React from "react";
import {Doughnut} from "react-chartjs-2";
import {Card, DatePicker, Typography, PageHeader} from "antd";
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

const TotalDataComponent = (props) => {
	const {handleChange, pieData, totalFemaleCase, totalMaleCase, totalDataOfCountry, isLoading, error, date} = props;
	const {startDate, endDate} = date;
	return (
		<>
			<Card title="Cases By Sex" extra={<RangePicker onChange={handleChange} style={{border: "none"}}/>
			} className="totalData-card">

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
									style={{marginLeft: 0, paddingLeft:0}}
									className="site-page-header"
									title="Date: "
									subTitle={`${startDate} / ${endDate}`}
								/>
								<Doughnut data={pieData}/>
								<div style={{marginTop: 20}}>
									<Text style={textStyle}>
										<span style={spanStyle}>
										Male:
										</span>
										{totalMaleCase}
									</Text>
									<Text style={textStyle}>
										<span style={spanStyle}>
										Female:
										</span>
										{totalFemaleCase}
									</Text>
									<Text style={textStyle}>
										<span style={spanStyle}>
										Total:
										</span>
										{totalDataOfCountry}
									</Text>
									{/*<Text style={textStyle}>*/}
									{/*	<span style={spanStyle}>*/}
									{/*	Date:*/}
									{/*	</span>*/}
									{/*	{startDate} - {endDate}*/}
									{/*</Text>*/}
								</div>
							</>
						)}
					</>
				)}
			</Card>
		</>
	);
};

export default TotalDataComponent;
