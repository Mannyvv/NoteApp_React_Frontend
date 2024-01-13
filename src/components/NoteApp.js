import { useEffect, useState } from "react";
import { FormGroup, Form, Input,Button } from "reactstrap";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../features/Toast";
import { fetchNotes } from "../features/CRUD.js";
import { API_URL } from "../utils/API";


import React from "react";
import NotesGrid from "./NotesGrid";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);
  const [newNoteAdded, setNewNoteAdded] = useState(false)

  //scrolls to latest note entered
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  //Limits note to 200 characters
  if (content.length > 200) {
    setContent(content.substring(0, 250));
  }

  //Runs once on render to obtain ALL notes from server
  useEffect(() => {
    fetchNotes(setNotes);
  }, []);

  //Create new note - POST
  const handleNewNote = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });
      const newNote = await response.json();
      setNotes([newNote, ...notes]);
      setTitle("");
      setContent("");
      scrollToTop();
      notify();
      setNewNoteAdded(!newNoteAdded)
    } catch (error) {
      console.log(error);
      return;
    }
  };

  //Obtains data from clicked note
  const handleNoteclick = (note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  //Updates previously clicked note - PUT
  const handleUpdateNote = async (event) => {
    event.preventDefault();
    if (!selectedNote) {
      console.log("Please select a note");
      return;
    }

    try {
      const response = await fetch(API_URL + selectedNote.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });
      const updatedNote = await response.json();
      const updateNoteList = notes.map((note) =>
        note.id === selectedNote.id ? updatedNote : note
      );
      setNotes(updateNoteList);
      setSelectedNote(null);
      setTitle("");
      setContent("");
    } catch (error) {
      console.log(error);
    }

    // Map through each item and will return updated note for matching id, only
    // will return same note for all others
  };

  //Resets form fields
  const handleCancel = () => {
    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  //Delets note - DELETE
  const deleteNote = async (event, note) => {
    event.stopPropagation();

    try {
      await fetch(API_URL + note.id, {
        method: "DELETE",
      });

      const selectedNote = note;
      const updateNoteList = notes.filter(
        (note) => note.id !== selectedNote.id
      );

      setNotes(updateNoteList);
      setSelectedNote(null);
    } catch (error) {}
  };

  return (
    <>
      <Form
        className="note-form2 d-flex"
        onSubmit={selectedNote ? handleUpdateNote : handleNewNote}
      >
        <FormGroup>
          <Input
            id="titleArea"
            name="titletext"
            type="textarea"
            placeholder="Title Here"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <Input
            className="notearea"
            id="noteArea"
            name="notetext"
            type="textarea"
            placeholder="Note Here"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
            style={{ height: "200px" }}
          />
          {selectedNote ? (
            <>
              <div className="edit-buttons">
                <Button block color="success">
                  Update
                </Button>
                <Button onClick={handleCancel} block color="danger">
                  Cancel
                </Button>
              </div>
            </>
          ) : (
            <Button
              type="submit"
              style={{ marginLeft: "0px", marginTop: "10px" }}
              block
              color="success"
            >
              Post It
            </Button>
          )}
        </FormGroup>
      </Form>

      {/* Toast for note posted confirmation */}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="app-container">
        <div className="note-form"></div>

        <NotesGrid
          newNoteAdded = {newNoteAdded}
          notes={notes}
          handleNoteclick={handleNoteclick}
          deleteNote={deleteNote}
        />
      </div>
    </>
  );
};

export default NoteApp;
