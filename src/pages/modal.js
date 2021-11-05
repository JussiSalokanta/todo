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
          <br />
          •If all the (possible) pictures and other such content used in your
          application are originally created by you yourself, tell it here
          explicitly. Otherwise, mention the licenses/permissions under which
          you use such additional content from external sources. Make sure that
          the possible license conditions actually allow such use and you fulfil
          all the related requirements. (The application code must, naturally,
          be written by you.) If you add content later on, do not forget
          updating the information related to this tier! joo joo
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
