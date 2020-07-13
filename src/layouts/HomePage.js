import React from "react";
import DataBySex from "../dataByProvince/containers/DataByProvinceContainer";
import {Col, Row, Typography} from "antd";
import TotalDataContainer from "../totalData/containers/TotalDataContainer";
import DataByDistrictContainer from "../dataByDistricts/containers/DataByDistrictContainer";
import DataByAgeGroupContainer from "../dataByAgeGroup/containers/DataByAgeGroupContainer";
import DataByDayContainer from "../dataByDay/containers/DataByDayContainer";
import MixDataContainer from "../mixData/containers/MixDataContainer";
import FooterContainer from "../footer/containers/FooterContainer";
import NepalRecentUpdatesContainer from "../nepalRecentUpdates/containers/NepalRecentUpdatesContainer";

const {Title} = Typography;

const HomePage = () => {

	return (
		<>
			<NepalRecentUpdatesContainer/>
			<Row style={{marginTop: 30}}>
				<Col span={22} offset = {1}>
					<Title level={4}>Graphical Representation | <span style={{fontSize: 16}}>2020</span></Title>
				</Col>
			</Row>
			<Row justify="center" style={{marginTop: 10}}>
				<Col span={11} style={{marginRight: 10}}>
					<TotalDataContainer/>
				</Col>
				<Col span={11}>
					<DataBySex/>
				</Col>
			</Row>
			<Row justify="center" style={{marginTop: 40}}>
				<Col span={22}>
					<DataByDistrictContainer/>
				</Col>
			</Row>
			<Row justify="center" style={{marginTop: 40}}>
				<Col span={11} style={{marginRight: 10}}>
					<DataByAgeGroupContainer/>
				</Col>
				<Col span={11}>
					<DataByDayContainer/>
				</Col>
			</Row>
			<Row justify="center" style={{marginTop: 40}}>
				<MixDataContainer/>
			</Row>
			<FooterContainer/>
		</>
	);
};

export default HomePage;
