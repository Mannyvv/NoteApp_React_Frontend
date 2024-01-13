import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const NotesGrid = ({ newNoteAdded,notes, handleNoteclick, deleteNote }) => {
  const notesGridRef = useRef(null);

  useEffect(() => {
    if (notesGridRef.current ) {
      const lastNote = notesGridRef.current.firstChild;
      anime({
        targets: lastNote,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        easing: 'easeInOutQuad',
      });
    }
 
    // Set initialRender to false after the first render
  }, [newNoteAdded]);

  return (
    <div ref={notesGridRef} className="notes-grid">
      {notes.map((note) => (
        <div
          className="note-item"
          onClick={() => handleNoteclick(note)}
          key={note.id}
        >
          <div className="notes-header">
            <button className='close' onClick={(event) => deleteNote(event, note)}><p className='close-text'>Delete</p></button>
          </div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NotesGrid;
