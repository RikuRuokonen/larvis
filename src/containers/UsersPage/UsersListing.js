import React from "react";
import {Avatar, Card, Space, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {v4 as uuidv4} from "uuid";

const UsersListing = ({ allUsersData, userId }) =>
  <>
    {allUsersData && allUsersData.data.map(user =>
      <Card key={uuidv4()} style={{ width: "600px", maxWidth: "90%"}}>
        <Space direction="vertical">
          <Avatar style={{ verticalAlign: 'middle' }} size="large" gap={2} >
            <UserOutlined />
          </Avatar>
          <Typography.Title
            level={5}
          >
            User_ID: {user["user_id"]} {user["user_id"] === userId ? "(You)" : ""}
          </Typography.Title>
          <Typography.Text>Name: {user.name}</Typography.Text>
        </Space>
      </Card>
    )}
  </>

export default UsersListing;