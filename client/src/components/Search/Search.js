import React, { Component } from "react";
import { InputGroup, Input, InputGroupAddon, Button, Container, Row } from 'reactstrap';
import Banner from "../Banner/Banner"
import List from "../List/List";
import "./style.css";


class Search extends Component {

    state = {
        books: [],
        search: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    searchBook = (event) => {
        event.preventDefault();
        fetch("/api/search/" + this.state.search).then(res => res.json())
            .then(data => this.setState({ books: data.items }))

        this.setState({ search: "" });
    }



    saveBook = (bookObj) => {
        // console.log(bookObj)
        fetch("/api/saved", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookObj)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }




    render() {
        return (
            <div>
                <Container fluid >
                    <Row>
                        <Banner />
                    </Row>
                </Container>
                <Container>
                    <div className="search">
                        <h4> Search Books:</h4>
                        <InputGroup className="text-center">
                            <Input
                                name="search"
                                onChange={this.handleInputChange}
                                placeholder="Type in Book Here" />
                            <InputGroupAddon addonType="prepend">
                                <Button
                                    onClick={this.searchBook}
                                    color="primary">Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    {this.state.books.map((book, i) =>
                        <List
                            title={book.volumeInfo.title}
                            image={book.volumeInfo.imageLinks.smallThumbnail}
                            link={book.volumeInfo.infoLink}
                            description={book.volumeInfo.description}
                            author={book.volumeInfo.authors}
                            key={"list_" + i}
                            saveBook={this.saveBook}
                        />
                    )}

                </Container>
            </div>

        )
    }


}

export default Search;