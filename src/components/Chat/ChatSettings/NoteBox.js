import { useState } from 'react';
// import NoteBox from './NoteBox';

function NoteBox() {
  const [comment, setComment] = useState('');
  
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  }
  
  return (
    <div className="comment-input-container">
      <input
        type="text"
        placeholder="Write a comment"
        value={comment}
        onChange={handleCommentChange}
      />
      <div className="comment-buttons">
        <button>Write</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
export default NoteBox;