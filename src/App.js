import React, { useEffect, useState } from "react";
import '@trimbleinc/modus-react-bootstrap/css/dist/modus-react-bootstrap-dark.min.css'
import './App.css';
import axios from "axios";
import UserList from "./UserList";

function App() {
    const [myData,setMyData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(result => { setMyData(result.data); })
    },[]);
    return (
    <div >
        <UserList myData={myData} />
    </div>
    );
}
export default App;

