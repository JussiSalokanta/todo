import { useState } from "react";

function getCurrentDate(separator='-'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

function Additems(props) {

const [name, setName] = useState("");
const [tag, setTag] = useState("");
const [dateAndTime] = useState(getCurrentDate())

const addItemButton = () => {

props.addItems( {
    name: name,
    tag: tag,
    dateAndTime: dateAndTime,
    completed: false

});

setName("");
setTag("");

};
return (
    <div>
        <br/>
        <form>
            <label htmlFor="name-field">Name</label>
            <input id="name-field"
            type="text"
            value={name}
            placeholder="Add a new task"
            onChange ={(e) => setName(e.target.value)}
            />
                <label htmlFor="tag-field">Tag</label>
            <input id="tag-field"
            type="text"
            value={tag}
            placeholder="Add tag to group tasks"
            onChange ={(e) => setTag(e.target.value)}
            />    
            <button type="button" onClick ={addItemButton}>Add</button>       
        </form>
    </div>
    
    
    )

}

export default Additems