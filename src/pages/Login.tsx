import React from 'react';
import LoginForm from "../components/LoginForm";
import {Layout} from 'antd';
import {Content, Header} from "antd/es/layout/layout";

const Login = () => (
    <Layout>
        <Header>Login page</Header>
        <Content>
            <LoginForm/>
        </Content>
    </Layout>
);

export default Login;
