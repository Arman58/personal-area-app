import ContactListForm from "./ContactListForm";
import React, {useEffect} from "react";
import {useGetContactsQuery} from "../../store/contactsApi";
import {useNavigate} from "react-router-dom";


const ContactsList = () => {
    const {data, error, isLoading, isFetching, isSuccess} = useGetContactsQuery()
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.length) {
            navigate('/login')
        }
    }, [navigate])

    return (
        <div style={{padding: "30px"}}>
            <h1>Contact List</h1>
            {isLoading && <h2>...Loading</h2>}
            {isFetching && <h2>...Fetching</h2>}
            {error && <h2>...something went wrong</h2>}
            {isSuccess && data && (
                <ContactListForm/>
            )}
        </div>
    )
}

export default ContactsList;
