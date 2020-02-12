//var API = require("../client/src/utils/API")
var axios = require("axios");
function getSearch() {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=AIzaSyAsYzC2Xx3xhYWRcHjSjNI7ml56rH1T5uA")
        .then(function (response) {
            console.log(response.data)
        })

}
getSearch()
module.exports = function (app) {

    app.get("api/search", function (req, res) {
        res.send(getSearch())
    })


}