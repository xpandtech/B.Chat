import React from 'react';
import './NotesList.css';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

class NoteQueue {
  constructor() {
    this.notes = [];
  }

  add(note) {
    this.notes.push(note);
  }

  remove() {
    return this.notes.shift();
  }

  isEmpty() {
    return this.notes.length === 0;
  }

  reverse() {
    this.notes.reverse();
  }
}

const notesList = ({notes, editNote, deleteNote}) => {
  const queue = new NoteQueue();
  notes.forEach(note => queue.add(note));
  queue.reverse();
  
  const noteElements = [];
  while (!queue.isEmpty()) {
    const note = queue.remove();
    noteElements.push(<div className="note" key={note.id}>{note.note}<span className="note-edit" onClick={() => editNote(note.id)}><FaPencilAlt /></span><span className="note-delete" onClick={() => deleteNote(note.id)}><FaTrashAlt /></span></div>);
  }
  
  return noteElements.length ? noteElements : null;
}


export default notesList;