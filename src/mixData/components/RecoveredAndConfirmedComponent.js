import React from "react";
import Skeleton from "react-loading-skeleton";
import {Card, Col, Typography} from "antd";
import {Doughnut} from "react-chartjs-2";

const spanStyle = {
	fontWeight: "bold",
	marginRight: 5
};

const textStyle = {
	marginRight: 20
};

const {Text} = Typography;

const RecoveredAndConfirmedComponent = (props) => {
	const {polarData2, isLoading, error, totalRecovered,confirmedCases} = props;
	return (
		<Col span={11} style={{marginRight: 10}} className="mixData-section">
			<Card title="Total Recovered & Confirmed Cases"
				  className="mixData-card">
				{isLoading ? (
					<>
						<Skeleton height={350}/>
					</>
				) : (
					<>
						{error ? (<p>error.error</p>) : (
							<>
								<Doughnut data={polarData2}/>
								<div style={{marginTop: 20}}>
									<Text style={textStyle}>
										<span style={spanStyle}>
											Total Recovered Cases:
										</span>
										{totalRecovered}
									</Text>
									<Text style={textStyle}>
										<span style={spanStyle}>
											Total Confirmed Cases:
										</span>
										{confirmedCases}
									</Text>
								</div>
							</>
						)}
					</>
				)}

			</Card>
		</Col>
	);
};

export default RecoveredAndConfirmedComponent;
