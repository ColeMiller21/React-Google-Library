
const axios = require("axios");
const bookController = require("../controllers/bookController")
const APIKEY = process.env.API_KEY


module.exports = function (app) {

    app.get("/api/search/:search", function (req, res) {
        const { search } = req.params
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&download=epub&key=" + APIKEY)
            .then(response => {
                return res.json({ items: response.data.items })
            }).catch(err => console.log(err))
    })

    app.post("/api/saved", function (req, res) {
        bookController.create(req.body).then(data => {
            return res.json(data)
        })
            .catch(err => console.log(err))
    })


    app.get("/api/saved", function (req, res) {
        bookController.findAll(req, res)
            .then(function (res) {
                return res
            }).catch(err => console.log(err))
    })

    app.delete("/api/saved/:id", function (req, res) {
        bookController.remove(req.params.id)
            .then(res => res)
            .catch(err => console.log(err))
    })


}
