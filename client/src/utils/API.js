import axios from "axios";

// const APIKEY = "AIzaSyAsYzC2Xx3xhYWRcHjSjNI7ml56rH1T5uA";

export default {
    search: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=AIzaSyAsYzC2Xx3xhYWRcHjSjNI7ml56rH1T5uA")
            .then(function (response) {
                return response.data;
            })
    }
};