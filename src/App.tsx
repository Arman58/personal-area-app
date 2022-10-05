import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Contacts from "./pages/Contacts";


function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/contacts-list" element={<Contacts/>}/>
            </Routes>
        </>
    );
}

export default App;
