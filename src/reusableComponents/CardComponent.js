import React from "react";
import "./css/card.css";
import {Card} from "antd";
import {SmileOutlined} from "@ant-design/icons";

const cardBodyStyle = {
	marginBottom: 0,
	fontWeight: "bold",
	fontSize: 18
};

const CardComponent = (props) => {
	const {title, cases, background, alt, imgSrc} = props;
	return (
		<Card bordered={false} className="reusable-card" style={{background: background}}>
			<img src={`/images/${imgSrc}`} alt={alt}/>
			<div className="overlay"/>
			<div className="overlay1"/>

			<p style={cardBodyStyle}>{cases}</p>
			<p>{title}</p>
		</Card>
	);
};

export default CardComponent;
