import React, { Component } from "react";
import { InputGroup, Input, InputGroupAddon, Button, Container, Row } from 'reactstrap';
import Banner from "../Banner/Banner"
import List from "../List/List";
import "./style.css"

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
                                <Button color="primary">Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <List />
                    <List />
                </Container>
            </div>

        )
    }


}

export default Search;