import React from "react";

export default function Comments() {
  return (
    <div className="notebox-container">
      <input
        type="text"
        className="notebox-input"
        placeholder="Enter Comment"
      />

      <div className="note-list">

        {/* //* note cards - 1 */}
        
        <card className="note-card">
          <p className="note-text">All the notes will be visible here</p>

          <div className="flex-row">
            <img
              src="https://mui.com/static/images/avatar/1.jpg"
              className="notebox-avatar"
            ></img>
            <div className="name">John Doe</div>
          </div>
        </card>

        {/* //* note cards - 2  */}

        <card className="note-card">
          <p className="note-text">All the notes will be visible here</p>

          <div className="flex-row">
            <img
              src="https://mui.com/static/images/avatar/1.jpg"
              className="notebox-avatar"
            ></img>
            <div className="name">John Doe</div>
          </div>
        </card>
      </div>
    </div>
  );
}
