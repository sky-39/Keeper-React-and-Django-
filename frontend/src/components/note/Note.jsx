import React from "react";
import './note.css'

function Note(props) {
  
  const handleClick = async () => {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={handleClick}>
      －
      </button>
    </div>
  );
}

export default Note;
