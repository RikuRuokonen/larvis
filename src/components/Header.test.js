import React from 'react';
import { shallow } from 'enzyme';
import { Button } from "antd";
import Header from "./Header";


describe("Header component", (() => {
  it('Header renders login button when correct prop in place', () => {
    const wrapper = shallow(<Header showLoginButton={true} onLoginClick={() => console.log("test")}/>)
    const loginButton = wrapper.find(Button);
    expect(loginButton).toHaveLength(1);
    expect(loginButton.render().text()).toEqual(" Login ")
  });
}));