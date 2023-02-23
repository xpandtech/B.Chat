<<<<<<< Updated upstream
import React from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
// import NoteBox from './NoteBox';

const NoteBox = () => {
  const data = [
    {
      userId: "02b",
      comId: "017",
      replies: []
    }
  ];
  return (
    <CommentSection
      currentUser={{
        currentUserImg:
          "https://ui-avatars.com/api/name=Riya&background=random",
      }}
      logIn={{
        loginLink: "http://localhost:3001/",
        signupLink: "http://localhost:3001/"
      }}
      commentData={data}
    />
=======
import React, { useState } from "react";
// import "./styles.css";
// import { RiDeleteBin6Fill } from 'react-icons/ri';

 
const NoteBox = () => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
    setDate(new Date().toLocaleString());
  };

  const handleDeleteClick = () => {
    setValue("");
    setDate("");
  };

  return (
    <div className="input-container">
        
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      {value && (
        <div className="delete-icon" onClick={handleDeleteClick}>
          &#10005;

        </div>
      )}
      <div className="date">{date}</div>

    </div>
>>>>>>> Stashed changes
  );
};

export default NoteBox;
