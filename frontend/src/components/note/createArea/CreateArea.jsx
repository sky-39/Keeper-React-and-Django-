import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import "./createArea.css";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const handleChange = async (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = async (event) => {
    console.log(event);
    props.onAdd(note);
    setNote({
      title: "",
      description: "",
    });
  };

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="createNote">
        <input
          name="title"
          onChange={handleChange}
          onClick={expand}
          value={note.title}
          placeholder="Title"
        />
        {isExpanded && (
          <textarea
            name="description"
            onChange={handleChange}
            value={note.description}
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
          />
        )}
        <Zoom in={isExpanded}>
          <button onClick={submitNote}>＋</button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
