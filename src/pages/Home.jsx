import React, { Component } from "react";
import { nanoid } from "nanoid";
import { getInitialData } from "../utils";
import Header from "../components/Header";
import AddNote from "../components/AddNote";
import ActiveNotes from "../components/ActiveNotes";
import ArchiveNote from "./../components/ArchiveNote";
import Footer from './../components/Footer';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchNotes: getInitialData(),
      searchKeyword: "",
    };

    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.changeArchiveStatusHandler = this.changeArchiveStatusHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  addNoteHandler = ({ title, body }) => {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: nanoid(16),
          title: title,
          body: body,
          archived: false,
          createdAt: new Date().toISOString(),
        },
      ],
      searchKeyword: "",
    });
  };

  deleteNoteHandler = (id) => {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id),
      searchKeyword: "",
    });
  };

  changeArchiveStatusHandler = (id) => {
    this.setState({
      notes: this.state.notes.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived;
        }

        return note;
      }),
      searchKeyword: "",
    });
  };

  searchHandler = (e) => {
    this.setState({
      searchNotes: this.state.notes.filter((note) =>
        note.title.toLowerCase().includes(e.target.value.toLowerCase())
      ),
      searchKeyword: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Header
          searchKeyword={this.state.searchKeyword}
          search={this.searchHandler}
        />
        <div className="note-app__body">
          <AddNote addNote={this.addNoteHandler} />
          <ActiveNotes
            notes={
              this.state.searchKeyword
                ? this.state.searchNotes
                : this.state.notes
            }
            deleteNote={this.deleteNoteHandler}
            changeArchiveStatus={this.changeArchiveStatusHandler}
          />
          <ArchiveNote
            notes={
              this.state.searchKeyword
                ? this.state.searchNotes
                : this.state.notes
            }
            deleteNote={this.deleteNoteHandler}
            changeArchiveStatus={this.changeArchiveStatusHandler}
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
