const fs = require("fs");
const path = require("path");
const util = require("util");
const express = require("express");
const app = express();

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.writeFile);

class Store {
    constructor() {
        this.lastId = 0;

    };
    write(note) {
        return writeFileAsync(path.join(__dirname, "db.json"))
    };
    read() {
        return readFileAsync(path.joing(_dirname, "db.json"))
    };
}

getNotes() {
    return this.read().then(notes => {
        let parsedNotes = JSON.parse(notes);
        console.log(parsedNotes);
        return parsedNotes;
    });
};
addNote(newNote) {
    return this.getNotes().then(notes => {
        const newNoteList = [notes, newNote];
        console.log(newNoteList);
    })
};

deleteNote(title) {
    return this.getNotes()
    .then(notes => {
        for(var i = 0; i < notes.lenght; i++)
            if (notes[i].title===title) {
                notes.splice(i, 1);
                break;
            }
    }
    this.write(notes);

    const store = new Store();

    module.exports = store;
    )

}
