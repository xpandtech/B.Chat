import React from 'react';
import './NotesList.css';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const notesList = ({notes, editNote, deleteNote}) => {
  return notes.length ? (
    notes.map(note => <div className="note" key={note.id}>{note.note}<span className="note-edit" onClick={() => editNote(note.id)}><FaPencilAlt /></span><span className="note-delete" onClick={() => deleteNote(note.id)}><FaTrashAlt /></span></div>)
  ) : null
}


export default notesList;