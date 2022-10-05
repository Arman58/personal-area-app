import {Button, Form, Input, List} from "antd";
import {DeleteOutlined, EditOutlined, SaveOutlined} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import {IContactModel} from "../../../store/models/contact.model";
import Search from "antd/es/input/Search";
import {
    useDeleteContactMutation,
    useEditContactMutation,
    useGetContactsQuery,
    useSearchUsersQuery
} from "../../../store/contactsApi";
import {useDebounce} from "../../../hooks/debounce";
import AddUser from "../../AddUser";


const ContactListForm = () => {

    const [form] = Form.useForm()
    const [id, setId] = useState(1)
    const [editable, setEditable] = useState(false)
    const [deleteContact] = useDeleteContactMutation()
    const [editContact] = useEditContactMutation()
    const {data, isLoading} = useGetContactsQuery()

    const [search, setSearch] = useState('')
    const [dropdown, setDropdown] = useState(false)
    const debounced = useDebounce(search)
    const {data: searchData} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 1,
        refetchOnFocus: true
    })


    useEffect(() => {
        setDropdown(debounced.length > 0 && searchData?.length! > 0)
    }, [debounced, searchData])

    const handleDelete = async (id: number) => {
        await deleteContact(id)
    }

    const edit = (item: Partial<IContactModel>) => {
        form.setFieldsValue({name: '', email: '', ...item});
    }

    const handleEdit = async (item: any) => {
        setEditable(false)
        await editContact({id, ...item})
    }

    return (
        <>
            <Search placeholder="input search text" value={search}
                    onChange={e => setSearch(e.target.value)}/>
            <AddUser/>
            <Form form={form} name="complex-form" onFinish={handleEdit}>
                <List
                    loading={isLoading}
                    itemLayout="horizontal"
                    dataSource={dropdown ? searchData : data}
                    renderItem={item => (
                        <List.Item
                            title="title1"

                            actions={[!(editable && id === item.id) && <span key="list-delete"
                                                                             onClick={() => handleDelete(item.id)}><DeleteOutlined
                                style={{fontSize: 18, color: 'red'}}/></span>,
                                editable && id === item.id ?
                                    <>
                                        <Button style={{marginRight: "10px"}} key="list-save"
                                                htmlType="submit" type="primary" shape="circle"
                                                icon={<SaveOutlined style={{fontSize: 18}}/>}/>
                                        <span key="list-cancel"
                                              onClick={() => setEditable(false)}>X</span>
                                    </>
                                    :
                                    <span key="list-edit" onClick={() => {
                                        edit(item)
                                        setEditable(true)
                                        setId(item.id)
                                    }}><EditOutlined style={{fontSize: 18, color: '#1890ff'}}/></span>]}
                        >
                            <List.Item.Meta
                                title={editable && id === item.id ? (
                                    <Form.Item
                                        name='name'
                                        style={{margin: 0}}
                                        rules={[
                                            {
                                                required: true,
                                                message: `Please Input name!`,
                                            },
                                        ]}
                                    >
                                        <Input style={{width: 160}} placeholder="Please input"/>
                                    </Form.Item>
                                ) : <div>{item.name}</div>}
                            />
                            <List.Item.Meta
                                title={editable && id === item.id ? (
                                    <Form.Item
                                        name='surname'
                                        style={{margin: 0}}
                                        rules={[
                                            {
                                                required: true,
                                                message: `Please Input email!`,
                                            },
                                        ]}
                                    >
                                        <Input style={{width: 160}} placeholder="Please input"/>
                                    </Form.Item>
                                ) : <div>{item.surname}</div>}
                            />
                            <List.Item.Meta
                                title={editable && id === item.id ? (
                                    <Form.Item
                                        name='email'
                                        style={{margin: 0}}
                                        rules={[
                                            {
                                                required: true,
                                                message: `Please Input email!`,
                                            },
                                        ]}
                                    >
                                        <Input style={{width: 160}} placeholder="Please input"/>
                                    </Form.Item>
                                ) : <div>{item.email}</div>}
                            />
                            <List.Item.Meta
                                title={editable && id === item.id ? (
                                    <Form.Item
                                        name='city'
                                        style={{margin: 0}}
                                        rules={[
                                            {
                                                required: true,
                                                message: `Please Input email!`,
                                            },
                                        ]}
                                    >
                                        <Input style={{width: 160}} placeholder="Please input"/>
                                    </Form.Item>
                                ) : <div>{item.city}</div>}
                            />
                        </List.Item>
                    )}
                />
            </Form>
        </>
    )
}

export default ContactListForm;
