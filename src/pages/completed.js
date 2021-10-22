import React from 'react';
  
function Completed(props) {

    const showToDo =(todo) => {
        return (
            <tr>
                <th> {todo.id} </th>
                <th> {todo.name} </th>
                <th> {todo.location} </th>
                <th> {todo.dateAndTime} </th>
            </tr> 
            );
    };
    return <div className="container">
        <div className="row">
            <h2>ToDos</h2>
        </div>
        <div className="row">
            <table className="table">
                <thead> 
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Tag</th>
                        <th scope="col">Date and Time</th>
                    </tr>
                </thead>
                <tbody>
               
                </tbody>
                </table>
        </div>
    </div>
    }
  
  
export default Completed;