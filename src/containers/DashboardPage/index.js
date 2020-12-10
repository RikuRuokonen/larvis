import React , { useState, useCallback, useMemo }from "react";
import { Content } from "../../components/ui-common";
import { Typography, Button, Col, Row, Alert, Spin } from "antd";
import Header from "../../components/Header";
import Reports from "./Reports";
import { parseDailyAcquisitions } from "../../helpers/utils";
import { useAcquisitions } from "../../queries/acquisitionQueries";

const DashboardPage = () => {
  const [showAcquisitions, setShowAcquisitions] = useState(false)
  const { isLoading, isError, data } = useAcquisitions();

  const orderData = (unOrdered) =>  unOrdered.sort((a, b) => a.timestamp - b.timestamp);

  const getParsedData = useCallback(() =>
    parseDailyAcquisitions(orderData(data.data)),
  [data]);

  return(
    <>
      <Header showNavigation />
    <Content>
      <Typography.Title level={2}>Welcome to Larvis, your ultimate space-tool.</Typography.Title>
      <Row>
        <Col xl={24} xs={24}>
          <Button onClick={() => setShowAcquisitions(true)} size={"large"}>Show Reports</Button>
        </Col>
        {showAcquisitions && data && (
          <Col xl={18} xs={24}>
            <Reports data={getParsedData()}/>
          </Col>
        )}
        {showAcquisitions && isError && (
          <Alert message={"Error in fetching data"} type={"error"} />
        )}
        {isLoading && <Spin />}
      </Row>
    </Content>
    </>
  )
};

export default DashboardPage;