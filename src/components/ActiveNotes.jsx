import React from "react";
import Empty from "./Empty";
import NotesItem from "./NotesItem";

export default function ActiveNotes({ notes, deleteNote, changeArchiveStatus }) {
  const notesActive = !notes.length
    ? []
    : notes.filter((note) => note.archived === false);

  return (
    <>
      <h2>Catatan Aktif</h2>
      {!notesActive.length ? (
        <Empty />
      ) : (
        <div className="notes-list">
          {notesActive.map((note, index) => {
            return (
              <NotesItem
                key={index}
                note={note}
                deleteNote={deleteNote}
                changeArchiveStatus={changeArchiveStatus}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
