import React from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, Button } from 'reactstrap';
import "./style.css";




function SavedList(props) {

    return (
        <Row>
            <div className="list">
                <ListGroup className="single">
                    <ListGroupItem >
                        <img id="image"
                            src={props.image}
                            alt={props.title} />
                        <div id="button">
                            <Button onClick={props.deleteBook} color="danger">Delete</Button>{' '}
                        </div>
                        <ListGroupItemHeading>{props.title}</ListGroupItemHeading>
                        <ListGroupItemText>{props.author}</ListGroupItemText>
                        <ListGroupItemText>
                            {props.description}
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </Row >
    );

}

export default SavedList;