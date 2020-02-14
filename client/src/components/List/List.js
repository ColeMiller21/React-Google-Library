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
                            src={props.image}
                            alt="" />
                        <div id="button">
                            <a href={props.link}><Button color="success">View</Button>{' '}</a>
                            <Button
                                onClick={() => props.saveBook({
                                    title: props.title, author: props.author, image: props.image,
                                    description: props.description, link: props.link
                                })}
                                color="primary">Save</Button>{' '}
                        </div>
                        <ListGroupItemHeading>{props.title}</ListGroupItemHeading>
                        <ListGroupItemText>Written By {props.author}</ListGroupItemText>
                        <ListGroupItemText>
                            {props.description}
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </Row >
    );

}

export default List;