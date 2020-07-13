import React from "react";
import { Col, Card, Typography } from "antd";
import { ExperimentOutlined } from "@ant-design/icons";

const { Text } = Typography;

const PCR = (props) => {
  const {pcr} = props;
  return (
    <>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <Card style={{ textAlign: "center" }} bordered={false}>
          <ExperimentOutlined />
          <Text style={{ marginLeft: 10, fontWeight: "bold" }}>{pcr}</Text>
          <span style={{ marginLeft: 10, marginRight: 10 }}>|</span>
          <Text>PCR Test</Text>
        </Card>
      </Col>
    </>
  );
};

export default PCR;
