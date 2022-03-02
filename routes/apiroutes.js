// // Dependencies
// const router = require('express').Router();
// const store = require('../db/store');

// const saveData = require('../db/saveData');

// // GET request
// router.get('/notes', function (req, res) {
//     saveData
//         .retrieveNotes()
//         .then(notes => res.json(notes))
//         .catch(err => res.status(500).json(err));
// });

// // POST request
// router.post('/notes', (req, res) => {
//     saveData
//         .addNote(req.body)
//         .then((note) => res.json(note))
//         .catch(err => res.status(500).json(err));
// });

// // Bonus - DELETE request
// router.delete('/notes/:id', function (req, res) {
//     saveData
//         .deleteNote(req.params.id)
//         .then(() => res.json({ ok: true }))
//         .catch(err => res.status(500).json(err));
// });

// module.exports = router;


const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});
router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});
router.delete("/notes/:id", (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});
module.exports = router;