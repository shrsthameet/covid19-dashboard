import React, {useState} from "react";
import "../css/navigation.css";
import {Link} from "react-router-dom";
import {Drawer} from "antd";
import {MenuFoldOutlined} from "@ant-design/icons";
import RightMenuComponent from "../components/RightMenuComponent";

const NavigationComponent = () => {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};
	return (
		<>
			<nav className="menuBar">
				{/*Brand Logo*/}
				<div className="logo">
					<Link to="/">
						<img src="/mohp.png" alt="logo"/>
					</Link>
				</div>

				<div className="menuCon">

					{/*Right Menu*/}
					<div className="rightMenu">
						<RightMenuComponent/>
					</div>

					{/*Responsive Drawer Icon*/}

					<MenuFoldOutlined className="barsMenu" onClick={showDrawer}/>

					{/*Drawer*/}
					<Drawer
						title="Basic Drawer"
						placement="right"
						closable={false}
						onClose={onClose}
						visible={visible}
					>
						{/*<LeftMenuComponent/>*/}
						{/*<RightMenuComponent/>*/}
						<p>Heading One</p>
						<p>Heading Two</p>
						<p>Heading Three</p>
					</Drawer>
				</div>
			</nav>
		</>
	);
};

export default NavigationComponent;
