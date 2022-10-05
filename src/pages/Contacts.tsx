import React from "react";
import {Content, Header} from "antd/es/layout/layout";
import ContactsList from "../components/ContactsList";
import Logout from "../components/Logout";

const Contacts = () => (

    <>
        <Header style={{display: "flex", justifyContent: "space-between", alignItems: "center", color: "white"}}>
            <div>Contact List</div>
            <Logout/>
        </Header>
        <Content>
            <ContactsList/>
        </Content>
    </>
)

export default Contacts;

