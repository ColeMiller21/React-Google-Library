import React, { Component } from "react";
import { Container, Row } from 'reactstrap';
import Banner from "../Banner/Banner";
import SavedList from "../List/SavedList";
import "./style.css"

class Saved extends Component {

    state = {
        savedBooks: []
    }

    getBooks = () => {
        fetch("/api/saved").then(res => res.json())
            .then(data => {
                this.setState({ savedBooks: data })
            })
            .catch(err => console.log(err))


    }

    componentDidMount() {
        this.getBooks();

    }

    deleteBook = id => {

        fetch("/api/saved/" + id, {
            method: "DELETE",
            body: JSON.stringify(id)
        }).then(res => {
            this.getBooks()
        })

        this.getBooks()

    }
    render() {
        return (
            <div>
                <Container fluid >
                    <Row>
                        <Banner />
                    </Row>
                </Container>
                <Container >
                    <div className="saved text-center">
                        <h1>Saved Books</h1>
                    </div>
                    {this.state.savedBooks.map(book =>
                        <SavedList
                            key={book._id}
                            title={book.title}
                            author={book.author}
                            description={book.description}
                            image={book.image}
                            deleteBook={() => this.deleteBook(book._id)}

                        />


                    )}




                </Container>
            </div>
        )
    }


}

export default Saved;