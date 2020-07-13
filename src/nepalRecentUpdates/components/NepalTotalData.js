import React from "react";
import "../css/nepalTotal.css";
import {Row, Col, PageHeader, Card} from "antd";
import PCR from "./PCR";
import RDT from "./RDT";
import Isolation from "./Isolation";
import Quarantine from "./Quarantine";
import {FormattedDate} from "../../reusableComponents/FormattedDate";
import CardComponent from "../../reusableComponents/CardComponent";

const NepalTotalData = (props) => {
	const {totalDeaths, totalRecovered, totalCase, totalInfected, total_pcr_test, total_rdt_test} = props;
	return (
		<>
			<Col
				xs={22}
				sm={22}
				md={13}
				lg={13}
				xl={13}
				xxl={13}
				style={{paddingLeft: 20}}
			>
				<PageHeader
					className="totalData-section-header"
					ghost={false}
					title="Total Data"
					extra={<FormattedDate/>}
				/>
				<Row gutter={14}>
					<Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
						<CardComponent
							cases={totalCase}
							title="Total Cases"
							background="#f8ecff"
							alt="cases"
							imgSrc="/virus.png"
						/>
					</Col>
					<Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
						<CardComponent
							cases={totalInfected}
							title="Total Infected"
							background="#ffbd80"
							alt="infected"
							imgSrc="/fever.png"
						/>
					</Col>
					<Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
						<CardComponent
							cases={totalRecovered}
							title="Recovered"
							background="#e6f3c2"
							alt="recovered"
							imgSrc="/smile.png"
						/>
					</Col>
					<Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
						<CardComponent
							cases={totalDeaths}
							title="Deaths"
							background="#fcaaaa"
							alt="deaths"
							imgSrc="/sad.png"
						/>
					</Col>
				</Row>
				<Row className="test-card-section" gutter={14}>
					<PCR
						pcr={total_pcr_test}
					/>
					<RDT
						rdt={total_rdt_test}
					/>
					<Isolation/>
					<Quarantine/>
				</Row>
			</Col>
		</>
	);
};

export default NepalTotalData;
