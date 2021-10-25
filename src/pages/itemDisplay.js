


function remove() {
    console.log('remove');
}


function ItemDisplay(props) { 
    const showToDo = (todo) => {
        return (
            <div key={todo.id}>
            {todo.name} 
            &nbsp;({todo.tag})
            <button className="remove-btn" onClick={() => remove()}>Remove</button>
            <button className="complete-btn">Complete</button>
            </div>
        );
    };
    return (
        <div className="container">
            <div className="header">TODO</div>
            <div className="tasks"> 
            {props.todo.map(showToDo)}
            </div>
        </div>
    );
    
}

export default ItemDisplay;

