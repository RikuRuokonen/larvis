import React, {useEffect, useState} from "react";
import { Typography, Modal } from "antd";
import { Content } from "../../components/ui-common";
import styled from "styled-components"
import illustration from "../../assets/front-page-illustration.svg"
import Header from "../../components/Header";
import LoginModalContent from "./LoginModalContent";
import { useLogin } from "../../queries/userQueries";
import { saveToLocalStorage, removeBoundaryDoubleQuotes, getFromLocalStorage } from "../../helpers/utils";
import { useHistory } from "react-router-dom";

const Enhanced = styled.span`
  color: #4761ec;
`;

const Illustration = styled.img`
   width: 250px;
   margin: auto;
`;

const LoginPage = () => {
  const [user, setUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doLogin, { status }] = useLogin();
  const history = useHistory();

  useEffect(() => {
    const token = getFromLocalStorage("token");
    if (token) {
      history.push("/dashboard")
    }
  }, [history]);


  const handleFieldChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = () => {
    doLogin(user).then((res)=> {
      saveToLocalStorage("token", removeBoundaryDoubleQuotes(res.data.access))
      saveToLocalStorage("userId", user["user_id"])
      setTimeout(() => history.push("/dashboard"), 1000)
    }).catch((err) => console.log(err))
  };

  return (
    <>
      <Header
        showLoginButton
        onLoginClick={() => setIsModalOpen(true)}
      />
      <Content>
        <Typography.Title style={{ fontSize: 80 }} level={1}>Go Beyond</Typography.Title>
        <Typography.Text style={{ fontSize: 30 }} >Powered by <Enhanced>Iceye</Enhanced></Typography.Text>
        <Illustration src={illustration} />
        <Modal
          visible={isModalOpen}
          okText={"Login"}
          onCancel={() => setIsModalOpen(false)}
          onOk={handleSubmit}
        >
          <LoginModalContent handleFieldChange={handleFieldChange} loginStatus={status}/>
        </Modal>
      </Content>
    </>
  )
};

export default LoginPage;