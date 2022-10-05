import {Button, Form, Input} from 'antd';
import React from 'react';
import {useAddContactMutation} from "../../../store/contactsApi";
import {IContactModel} from "../../../store/models/contact.model";

import "./AddUserForm.css"

const AddUserForm: React.FC = () => {
    const [addContact] = useAddContactMutation()

    const onFinish = async (values: IContactModel) => {
        await addContact(values)
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <Form name="complex-form" onFinish={onFinish} labelCol={{span: 8}} wrapperCol={{span: 16}}>
                <Form.Item label="Name">
                    <Form.Item
                        name="name"
                        noStyle
                        rules={[{required: true, message: 'Username is required'}]}
                    >
                        <Input style={{width: 160}} placeholder="Please input"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="Surname">
                    <Form.Item
                        name="surname"
                        noStyle
                        rules={[{required: true, message: 'Surname is required'}]}
                    >
                        <Input style={{width: 160}} placeholder="Please input"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="Email">
                    <Form.Item
                        name="email"
                        noStyle
                        rules={[{required: true, message: 'Email is required'}]}
                    >
                        <Input style={{width: 160}} placeholder="Please input"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="City">
                    <Form.Item
                        name="city"
                        noStyle
                        rules={[{required: true, message: 'City is required'}]}
                    >
                        <Input style={{width: 160}} placeholder="Please input"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item label=" " colon={false}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddUserForm;
