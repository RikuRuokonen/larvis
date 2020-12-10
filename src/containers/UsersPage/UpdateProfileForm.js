import React from "react";
import {Typography, Input, Space, Alert, } from "antd";

const UpdateProfileForm = ({ handleFieldChange, status, user }) =>
    <Space direction="vertical">
      <Typography.Text>{"Name"}</Typography.Text>
      <Input
        name="name"
        value={user.name}
        onChange={handleFieldChange}
      />
      <Typography.Text>{"Password"}</Typography.Text>
      <Input.Password
        name="password"
        value={user.password}
        onChange={handleFieldChange}
      />
      {status === "success" && (
        <Space>
          <Alert  message={"Update succeeded"} type="success" />
        </Space>
      )}
      {status === "error" && (
        <Alert message={"Update failed"} type="error" />
      )}
    </Space>

export default UpdateProfileForm;
