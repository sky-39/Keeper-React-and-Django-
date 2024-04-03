import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Note from "./note/Note";
import CreateArea from "./note/createArea/CreateArea";

function Keeper() {
  const [notes, setNotes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/tasks/");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addNote = async (newNote) => {
    try {
      const response = await axios.post("http://localhost:8000/api/tasks/", newNote);
      console.log("Post created:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }

    // setNotes((prevNotes) => {
    //   return [...prevNotes, newNote];
    // });
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/tasks/${notes[id]['id']}/`);
      console.log("Note Deleted :", id);
      fetchData();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            description={noteItem.description}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default Keeper;
