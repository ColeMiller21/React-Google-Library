const db = require("../models")

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        return db.Book
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    create: function (bookObj) {
        return db.Book
            .create(bookObj)
            .then(dbModel => dbModel)
            .catch(err => console.log(err));

    },
    remove: function (req, res) {
        return db.Book
            .findById({ _id: req })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => err);
    }
};