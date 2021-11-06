import { useState } from "react";

function Search(props) {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");

  const SearchButton = () => {
    props.callback({
      name: name,
      tag: tag,
    });
  };

  return (
    <div>
      <br />
      <form>
        <label htmlFor="name-field">Name</label>
        <input
          id="name-field"
          type="text"
          value={name}
          placeholder="Search by name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="tag-field">Tag</label>
        <input
          id="tag-field"
          type="text"
          value={tag}
          placeholder="Search by tag"
          onChange={(e) => setTag(e.target.value)}
        />
        <button type="button" onClick={SearchButton}>
          Search
        </button>
      </form>
    </div>
  );
}
export default Search;
