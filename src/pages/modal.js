import React from "react";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title"> About this project </h4>
        </div>
        <div className="modal-body">
          Author: Jussi Salokanta
          <br />
          <br />
          This To-Do app uses json-file as mock database.
          <br />
          One can add items to the list by writing something <br />
          in the name and tag input-fields. Filtering (search)
          <br />
          works the same way but it is still not complete <br />
          as it works only with exact wordings as it checks the input <br />
          and compares it to the items in the database. <br />
          <br />
          <br />
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
