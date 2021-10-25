


  function ItemDisplay(props) {
    const showToDo = (todo) => {      
      return (
        <tr key={todo.id}>
          <th> {todo.id} </th>
          <th> {todo.name} </th>
          <th> {todo.tag} </th>
          <th> {todo.dateAndTime} </th>
        </tr>
      );
    };
    return <div className="container">
      <div className="row">
        <h2>To-Do's</h2>
      </div>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">tag</th>
              <th scope="col">Date and Time</th>
            </tr>
          </thead>
          <tbody>
            {props.todo.map(showToDo)}
          </tbody>
        </table>
      </div>
    </div>
    }
  
  export default ItemDisplay;