import React from "react";
import { Container, Row } from "reactstrap";
import "./style.css";


function Banner() {
    return (
        <Container fluid>
            <Row>
                <div id="banner-img">
                    <div className="img-text text-center">
                        <h1 className="title">React Google Library</h1>
                        <h2>Search and Save books!</h2>
                    </div>
                </div>
            </Row>
        </ Container>
    );
}

export default Banner;