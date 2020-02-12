import React from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, Button } from 'reactstrap';
import "./style.css";




function List(props) {

    return (
        <Row>
            <div className="list">
                <ListGroup>
                    <ListGroupItem className="single" >
                        <img id="image"
                            src="https://oie.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg"
                            alt="" />
                        <div id="button">
                            <Button color="success">View</Button>{' '}
                            <Button color="primary">Save</Button>{' '}
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

export default List;