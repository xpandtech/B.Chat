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
  );
};

export default NoteBox;
