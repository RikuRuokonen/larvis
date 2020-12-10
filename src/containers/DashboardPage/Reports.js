import { Card, Space, Statistic, Typography } from "antd";
import { Area, AreaChart, YAxis, XAxis } from "recharts";
import React from "react";
import styled from "styled-components";
import { getTotalAcquisitions } from "../../helpers/utils";
import PropTypes from "prop-types";
import { useMediaQuery } from 'react-responsive'

const ReportsContainer = styled.div`
  height: 500px;
  max-width: 90%;
  @media (max-width: 800px) {
    margin-bottom: 120px;
  }
`;

const Reports = ({ data }) => {
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 1000px)'
  });

  return (
    <ReportsContainer>
      <Space direction={"vertical"}>
        <Typography.Title level={3} style={{
          marginTop: "40px"
        }}>
          Overview
        </Typography.Title>
        <Card title="Total number of acquisitions" >
          <Statistic title="30 day total" value={getTotalAcquisitions(data)} />
        </Card>
        <Card title="Development of acquisitions" >
          <AreaChart data={data} width={isMobileDevice ? 300 : 1000} height={200}>
            <YAxis dataKey="sites" />
            <XAxis dataKey="dayOfMonth"/>
            <Area type="monotone" dataKey="sites" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </Card>
      </Space>
    </ReportsContainer>
  )
};

Reports.propTypes = {
  data: PropTypes.array,
};

export default Reports;
