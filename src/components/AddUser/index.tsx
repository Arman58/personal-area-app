import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import AddUserForm from "./AddUserForm";

import s from "./AddUser.module.css";

const AddUser = () => {
    const [toggleAddUser, setToggleAddUser] = useState(false)

    return (
        <>
            <div className={s.addSection}>
                <Button className={s.addUser} type="primary" icon={<PlusOutlined/>}
                        onClick={() => setToggleAddUser(!toggleAddUser)}>
                    Add user
                </Button>
                {toggleAddUser && <AddUserForm/>}
            </div>
        </>
    )
}

export default AddUser;
