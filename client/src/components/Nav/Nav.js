import React from "react";
import { Container } from "reactstrap";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import "./style.css";


function Nav(props) {

    return (
        <Container fluid id="header" className="fixed-top">
            <div id="links">
                <h1>Google Library</h1>
                <Link to="/"><h3>Search</h3></Link>
                <Link to="/saved"><h3>Saved</h3></Link>
            </div>
        </Container>


    )


}


export default Nav;