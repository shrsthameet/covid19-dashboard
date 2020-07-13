import React from "react";
import "../css/nepalTodays.css";
import {Row, Col, PageHeader, Card} from "antd";
import {DownloadOutlined, PlayCircleOutlined} from "@ant-design/icons";
import {FormattedDate} from "../../reusableComponents/FormattedDate";
import CardComponent from "../../reusableComponents/CardComponent";

const NepalTodaysData = (props) => {
	const {today_deaths, today_recovered, newCase} = props;
	return (
		<>
			<Col
				xs={22}
				sm={22}
				md={9}
				lg={9}
				xl={9}
				xxl={9}
				style={{paddingRight: 20}}
			>
				<PageHeader
					className="todaysData-section-header"
					ghost={false}
					title="Today's Data"
					extra={<FormattedDate/>}
				/>
				<Row gutter={14}>
					<Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
						<CardComponent
							cases={newCase}
							title="New Cases"
							background="#a7ffff"
							alt="newCase"
							imgSrc="/virus.png"
						/>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
						<CardComponent
							cases={today_recovered}
							title="Recovered"
							background="#e6f3c2"
							alt="recovered"
							imgSrc="/smile.png"
						/>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
						<CardComponent
							cases={today_deaths}
							title="Deaths"
							background="#fcaaaa"
							alt="deaths"
							imgSrc="/sad.png"
						/>
					</Col>
				</Row>
				<PageHeader
					className="situation-report-section"
					title="Download Situation Report"
					extra={<DownloadOutlined/>}
				/>
				<PageHeader
					className="self-assessment-section"
					title="Take COVID-19 Self assessment test"
					extra={<PlayCircleOutlined/>}
				/>
			</Col>
		</>
	);
};

export default NepalTodaysData;
