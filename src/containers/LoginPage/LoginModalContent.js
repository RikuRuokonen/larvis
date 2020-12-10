import React from "react";
import { Typography, Input, Space, Alert, Spin } from "antd";
import PropTypes from "prop-types";

const LoginModalContent = ({ handleFieldChange, loginStatus }) =>
  <Space direction="vertical">
    <Typography.Text>{"Username"}</Typography.Text>
    <Input
      name="user_id"
      onChange={handleFieldChange}
    />
    <Typography.Text>{"Password"}</Typography.Text>
    <Input.Password
      name="password"
      onChange={handleFieldChange}
    />
    {loginStatus === "success" && (
      <Space>
          <Alert  message={"Login succeeded"} type="success" />
          <Spin/>
      </Space>
    )}
    {loginStatus === "error" && (
      <Alert message={"Login failed"} type="error" />
    )}
  </Space>

LoginModalContent.propTypes = {
    handleFieldChange: PropTypes.func,
    loginStatus: PropTypes.string,
};

export default LoginModalContent;