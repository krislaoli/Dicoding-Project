import React from "react";

export default function Header({searchKeyword, search}) {
  return (
    <div className="note-app__header">
      <h1>Belajar React</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan berdasarkan title"
          onChange={(e) => search(e)}
          value={searchKeyword}
        />
      </div>
    </div>
  );
}
