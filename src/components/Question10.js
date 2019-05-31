import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button,InputGroup,FormControl,Modal } from 'react-bootstrap'
import './Questions.css'

export default class Question10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: false,
          shown1: true,
          shown2: true
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(){
      this.props.history.push("/question11")
    }
    render(){
        return(
            <Container className="container">
                <Jumbotron>
                    <h1>10. หากฉันเจอปัญหา ฉันมักจะถามตัวเองเป็นสิ่งแรก ว่าใครพอจะช่วยฉันในเรื่องนี้ได้บ้าง  </h1>
                    <Row>
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>ใช่</p>
                        </div> 
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>ไม่ใช่</p>
                        </div> 
                    </Row>
                </Jumbotron>
            </Container>
        )
    }
}
