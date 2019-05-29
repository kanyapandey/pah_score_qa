import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router-dom'
import { Jumbotron, Container, Row, Form, Col, Image, Button,InputGroup,FormControl } from 'react-bootstrap'
import './Questions.css'

export default class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: false
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(){
      this.props.history.push("/question2")
    }
    render(){
        return(
            <Container className="container">
                <Jumbotron>
                    <h1>1. โปรดระบุ อาชีพเสริม…</h1>
                    <div className="partTime">
                      <InputGroup>
                        <FormControl as="textarea" aria-label="With textarea" />
                      </InputGroup>
                    </div>
                    <Row className="btnCenter">
                        <Button  className="btn" variant="success" size="lg" onClick={this.handleChange}>Next</Button>
                    </Row>
                </Jumbotron>
            </Container>
        )
    }
}
