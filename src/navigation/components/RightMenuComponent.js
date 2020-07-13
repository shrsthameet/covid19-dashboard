import React from "react";
import {Input} from "antd";
import {Link} from "react-router-dom";

const {Search} = Input;

const RightMenuComponent = () => {
	return (
		<>
			{/*<Menu mode="horizontal">*/}
			{/*	<Menu.Item key="mail">*/}
			{/*		Navigation One*/}
			{/*	</Menu.Item>*/}
			{/*</Menu>*/}
			{/*<Menu mode="horizontal">*/}
			{/*	<Menu.Item key="headingOne">*/}
			{/*Heading One*/}
			{/*/!*</Menu.Item>*!/*/}
			{/*/!*<Menu.Item key="headingTwo">*!/*/}
			{/*Heading Two*/}
			{/*/!*</Menu.Item>*!/*/}
			{/*/!*<Menu.Item key="headingThree">*!/*/}
			{/*Heading Three*/}
			{/*</Menu.Item>*/}
			<div className="list-menu">
				<ul>
					<li>
						<Link to="/">
							Heading One
						</Link>
					</li>
					<li>
						<Link to="/">
							Heading Two
						</Link>
					</li>
					<li>
						<Link to="/">
							Heading Three
						</Link>
					</li>
					<Search
						placeholder="input search text"
						// onSearch={value => console.log(value)}
						style={{width: 200}}
					/>
				</ul>
			</div>

			{/*</Menu>*/}
		</>
	);
};

export default RightMenuComponent;
