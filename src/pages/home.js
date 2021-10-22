import React from 'react';
 import AddInfo from './Additems'; 
 import {useState} from 'react'
function Home () {
  const [data, setData] = useState({todo: [] })

  

  const addInfoToData = (item) => {
    let todo = data["todo"];

    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(item)
    };

    fetch("http://localhost:3010/todo", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      todo.push(data);
    setData({todo: todo});
    });
  }
  return (
    <div>
    <h1>Home page</h1> 
    <p>This is the home page</p>
    <AddInfo addInfo ={addInfoToData} />
    </div>
  );
};
  
export default Home;