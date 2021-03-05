import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

function List(props) {
    let [list, setList] = useState([])

    useEffect(() => {
        axios({ method: "get", url: "http://localhost:3006/info-list/" })
            .then(function (response) {
                console.log(response);
                setList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return (
        <div className="App">
            {list.map(item => {
                return <div key={item.id} className={'mr-1'}>
                    Name: {item.Name}<br />
                    Email: {item.Email}<br />
                    Phone: {item.Phone}<br />
                    <Link to={`/edit/${item.id}`}>Edit</Link>
                    
                </div>
            })}
        </div>
    );
}

export default List;
