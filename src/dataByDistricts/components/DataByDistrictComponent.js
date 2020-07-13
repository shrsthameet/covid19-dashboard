import React from "react";
import {Card, DatePicker, PageHeader} from "antd";
import {Line} from "react-chartjs-2";
import Skeleton from "react-loading-skeleton";

const {RangePicker} = DatePicker;

const DataByDistrictComponent = (props) => {
	const {lineData, handleChange, isLoading, error, date} = props;
	const {startDate, endDate} = date;
	return (
		<>
			<Card title="Data By District" extra={<RangePicker style={{border: "none"}} onChange={handleChange}/>}
				  className="district-card">
				{isLoading ? (
					<>
						<Skeleton height={50}/>
						<Skeleton height={650}/>
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
								<Line data={lineData}
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
													  labelString: "Districts",
													  fontSize: 15,
													  padding: 10
												  }
											  }],
										  }
									  }}
								/>
							</>
						)}
					</>
				)}
			</Card>
		</>
	);
};

export default DataByDistrictComponent;
