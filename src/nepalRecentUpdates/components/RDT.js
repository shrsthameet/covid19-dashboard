import React from "react";
import { Col, Card, Typography } from "antd";
import { ExperimentOutlined } from "@ant-design/icons";

const { Text } = Typography;

const RDT = (props) => {
  const {rdt} = props;
  return (
    <>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <Card style={{ textAlign: "center" }} bordered={false}>
          <ExperimentOutlined />
          <Text style={{ marginLeft: 10, fontWeight: "bold" }}>{rdt}</Text>
          <span style={{ marginLeft: 10, marginRight: 10 }}>|</span>
          <Text>RDT Test</Text>
        </Card>
      </Col>
    </>
  );
};

export default RDT;
