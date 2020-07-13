import React from "react";
import {Typography} from "antd";
import Moment from "react-moment";
import {currentDate, currentTime} from "../currentDate";

const {Text} = Typography;

export const FormattedDate = () => {
	return (
		<>
			<Text style={{paddingRight: 0, marginRight: 0}}>
				<span style={{fontWeight: "bold"}}>Date: </span>
				<Moment format='Do MMMM YYYY'>{currentDate}</Moment>
				{" "}|{" "}
				<span style={{fontWeight: "bold"}}>Time: </span>
				{currentTime}
			</Text>
		</>
	);
};

