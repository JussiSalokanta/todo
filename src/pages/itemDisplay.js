import { useState } from "react";

function ItemDisplay(props) {
  const [style, setStyle] = useState("tasks");
  const changeStyle = () => {
    console.log("you just clicked");
    setStyle("tasks2");
  };

  const showToDo = (todo) => {
    return (
      <div key={todo.id}>
        {todo.name}
        &nbsp;({todo.tag})
        <button className="remove-btn" onClick={() => props.deleteItem(todo)}>
          Remove
        </button>
        <button className="complete-btn" onClick={changeStyle}>
          Done
        </button>
      </div>
    );
  };
  return (
    <div className="container">
      <div className="header">TODO</div>
      <div className={style}>{props.todo.map(showToDo)}</div>
    </div>
  );
}

export default ItemDisplay;
