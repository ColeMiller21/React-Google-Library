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
                            src="https://oie.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg"
                            alt="" />
                        <div id="button">
                            <Button color="danger">Delete</Button>{' '}
                        </div>
                        <ListGroupItemHeading>Book Title</ListGroupItemHeading>
                        <ListGroupItemText>Written By Author</ListGroupItemText>
                        <ListGroupItemText>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </Row >
    );

}

export default SavedList;