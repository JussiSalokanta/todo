import React from "react";
import Additems from "./Additems";
import { useState, useEffect } from "react";
import ItemDisplay from "./itemDisplay";

function Home() {
  const [data, setData] = useState({ todo: [] });

  useEffect(() => {
    fetch("http://localhost:3010/todo")
      .then((response) => response.json())
      .then((data) => setData({ todo: data }));
  }, []);

  const deleteItem = (todoToDelete) => {
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3010/todo/${todoToDelete.id}`, requestOptions).then(
      (reponse) => {
        if (reponse.ok) {
          const todosWithoutDeleted = data.todo.filter(
            (todo) => todo.id !== todoToDelete.id
          );
          setData({ todo: todosWithoutDeleted });
        }
      }
    );
  };

  const addInfoToData = (item) => {
    let todo = data["todo"];

    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    };

    fetch("http://localhost:3010/todo", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        todo.push(data);
        setData({ todo: todo });
      });
  };
  return (
    <div>
      <div>
        <p>Start adding items to the To-Do list</p>
        <Additems addItems={addInfoToData} />
        <br />
        <ItemDisplay todo={data["todo"]} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default Home;
