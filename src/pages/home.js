import React from "react";
import Additems from "./Additems";
import { useState, useEffect } from "react";
import ItemDisplay from "./itemDisplay";
import Search from "./search";

function Home() {
  const [data, setData] = useState({ todo: [] });

  useEffect(() => {
    fetch("http://localhost:3010/todo")
      .then((response) => response.json())
      .then((data) => setData({ todo: data }));
  }, []);

  // Delete item from the list
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

  // Conditions of the filter (search) function
  const [filter, setFilter] = useState({});
  const updateFilter = (searchParameter) => {
    setFilter(searchParameter);
  };

  const filterData = (data) => {
    const filterData = [];

    if (!filter.name) {
      return data;
    }
    for (const item of data) {
      if (filter.name !== "" && item.name !== filter.name) {
        continue;
      }
      if (filter.tag !== "" && item.tag !== filter.tag) {
        continue;
      }
      filterData.push(item);
    }
    return filterData;
  };

  // To add items on the to-do-list
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
        <p> Search by name and/or tag </p>
        <Search callback={updateFilter} />
        <br />
        <ItemDisplay todo={filterData(data["todo"])} deleteItem={deleteItem} />
        <br />
      </div>
    </div>
  );
}

export default Home;
