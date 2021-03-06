import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button,InputGroup,FormControl,Modal } from 'react-bootstrap'
import './Questions.css'

export default class Question5 extends Component {
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
      this.props.history.push("/question6")
    }
    render(){
        return(
            <Container className="container">
                <Jumbotron>
                    <h1>5. ไม่ว่าจะอย่างไรก็ตาม ฉันยังคงโอนเงินค่าใช้จ่ายให้พ่อแม่อยู่เสมอ  </h1>
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
