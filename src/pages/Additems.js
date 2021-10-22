import { useState } from "react";

function AddInfo(props) {

const [name, setName] = useState("");
const [tag, setTag] = useState("");
const [dateAndTime] = useState(Date())

const addItemButton = () => {

props.addInfo( {
    name: name,
    tag: tag,
    dateAndTime: dateAndTime

});
setName("");
setTag("");
};
return (
    <div>
        <h2> Add To-Do</h2>
        <form>
            <label htmlFor="name-field">Name</label>
            <input id="name-field"
            type="text"
            value={name}
            onChange ={(e) => setName(e.target.value)}
            />
                <label htmlFor="tag-field">Tag</label>
            <input id="tag-field"
            type="text"
            value={tag}
            onChange ={(e) => setTag(e.target.value)}
            />    
            <button type="button" onClick ={addItemButton}>Add</button>       
        </form>
    </div>
    
    
    )

}

export default AddInfo