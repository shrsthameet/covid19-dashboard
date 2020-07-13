import React from "react";
import { Col, Card, Typography } from "antd";
import { SecurityScanOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Quarantine = () => {
  return (
    <>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <Card style={{ textAlign: "center" }} bordered={false}>
          <SecurityScanOutlined />
          <Text style={{ marginLeft: 10, fontWeight: "bold" }}>57890</Text>
          <span style={{ marginLeft: 10, marginRight: 10 }}>|</span>
          <Text>Quarantine</Text>
        </Card>
      </Col>
    </>
  );
};

export default Quarantine;
