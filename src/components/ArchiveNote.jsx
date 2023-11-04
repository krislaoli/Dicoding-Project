import React from "react";
import Empty from "./Empty";
import NotesItem from "./NotesItem";

export default function ArchiveNote({
  notes,
  deleteNote,
  changeArchiveStatus,
}) {
  const notesArchive = !notes.length
    ? []
    : notes.filter((note) => note.archived === true);

  return (
    <>
      <h2>Arsip</h2>
      {!notesArchive.length ? (
        <Empty />
      ) : (
        <div className="notes-list">
          {notesArchive.map((note, index) => {
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
