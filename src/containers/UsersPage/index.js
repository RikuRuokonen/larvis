import React, { useState, useEffect } from "react";
import { useQueryCache } from "react-query";
import Header from "../../components/Header";
import UpdateProfileForm from "./UpdateProfileForm";
import {Content} from "../../components/ui-common";
import {Button, Col, Row, Typography,  Modal, Alert } from "antd";
import { useUsers, useOwnUser, useUpdateUser } from "../../queries/userQueries";
import illustration from "../../assets/users-page-illustration.svg";
import styled from "styled-components";
import { getFromLocalStorage } from "../../helpers/utils";
import UsersListing from "./UsersListing";

const Illustration = styled.img`
  width: 500px;
  max-width: 90%;
  margin: auto;
`;

const UsersPage = () => {
  const userId = getFromLocalStorage("userId")
  const { data: allUsersData, isError: allUsersError } = useUsers();
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const { data: ownUserData, isError: ownUserError } = useOwnUser(userId);
  const [ mutateUser ] = useUpdateUser();
  const [ userUpdateStatus, setUserUpdateStatus ] = useState(null)
  const [ editableUser, setEditableUser ] = useState({});
  const queryCache = useQueryCache();

  useEffect(() => {
    if(ownUserData) {
      setEditableUser(ownUserData.data);
    }
  }, [ownUserData]);

  const handleUserUpdate = () => {
    mutateUser(editableUser, {
      onSuccess: () => {
        queryCache.invalidateQueries("users")
        setUserUpdateStatus("success")
        setTimeout(() => {
          setIsModalOpen(false);
          setUserUpdateStatus(null);
        }, 2500)
      },

      onError: () => {
        setUserUpdateStatus("error");
      }
    })
  }

  const handleFieldChange = (e) => {
    setEditableUser({
      ...editableUser,
      [e.target.name]: e.target.value,
    })
  };

  return (
    <>
      <Header showNavigation />
      <Content>
        <Typography.Title style={{ marginBottom: 40 }} level={2}>Larvis users. Here are your fellow space-engineers.</Typography.Title>
        <Row gutter={40}>
          <Col xs={24} xl={10}>
            <UsersListing allUsersData={allUsersData} userId={userId} />
          </Col>
          <Col xs={24} xl={12}>
            <Row>
              <Col span={24}>
                {ownUserData && (
                  <>
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      size="large"
                      type="primary">
                      Update your profile
                    </Button>
                    <Modal
                    visible={isModalOpen}
                    okText={"Update Profile"}
                    onOk={handleUserUpdate}
                    onCancel={() => {
                      setIsModalOpen(false);
                      setUserUpdateStatus(null);
                    }}
                    >
                      <UpdateProfileForm user={editableUser} handleFieldChange={handleFieldChange} status={userUpdateStatus}/>
                    </Modal>
                  </>
                )}
                {(allUsersError || ownUserError) && (
                  <Alert message={"Error fetching data"} type={"error"} />
                )}
              </Col>
              <Col span={24}>
                <Illustration src={illustration} />
              </Col>
            </Row>
          </Col>
          <Col xs={24} xl={12}>
          </Col>
        </Row>
      </Content>
    </>
  )
};

export default UsersPage;