import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import Saved from "./components/Saved/Saved";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';


class App extends Component {

  render() {
    return (
      <div>
        <Container fluid>
          <Router>
            <Row>
              <Nav />
              <Route exact path="/" component={Search} />
              <Route exact path="/saved" component={Saved} />
            </Row>
          </Router>

          {/* <Row>
            <Search />
            <Saved />
          </Row> */}
        </Container>
      </div>

    )
  };
}

export default App;
