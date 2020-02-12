import React, { Component } from "react";
import { Container, Row } from 'reactstrap';
import Banner from "../Banner/Banner";
import SavedList from "../List/SavedList";
import "./style.css"

class Saved extends Component {


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
                    <SavedList />
                    <SavedList />


                </Container>
            </div>
        )
    }


}

export default Saved;