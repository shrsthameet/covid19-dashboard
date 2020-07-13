import React from "react";
import Skeleton from "react-loading-skeleton";
import {Card, Col, Typography} from "antd";
import {Polar} from "react-chartjs-2";

const spanStyle = {
	fontWeight: "bold",
	marginRight: 5
};

const textStyle = {
	marginRight: 20
};

const {Text} = Typography;

const DeathsAndNewCasesComponent = (props) => {
	const {polarData, isLoading, error, totalDeaths,newCases} = props;
	return (
		<Col span={11} className="mixData-section">
			<Card title="Total Deaths & New Cases"
				  className="mixData-card">
				{isLoading ? (
					<>
						<Skeleton height={350}/>
					</>
				) : (
					<>
						{error ? (<p>error.error</p>) : (
							<>
								<Polar data={polarData}/>
								<div style={{marginTop: 20}}>
									<Text style={textStyle}>
										<span style={spanStyle}>
											Total Deaths:
										</span>
											{totalDeaths}
									</Text>
									<Text style={textStyle}>
										<span style={spanStyle}>
											Total New Cases:
										</span>
										{newCases}
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

export default DeathsAndNewCasesComponent;
