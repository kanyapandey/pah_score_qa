import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button,InputGroup,FormControl,Modal } from 'react-bootstrap'
import './Questions.css'

export default class Question3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: false,
          shown1: true,
          shown2: true,
          shown3: true
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
      this.props.history.push("/question4")
    }
    render(){
        return(
            <Container className="container">
                <Jumbotron>
                    <h1>3. สถานะของคุณในที่พักที่คุณอาศัยอยู่ในปัจจุบัน </h1>
                    <Row>
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>เจ้าของ</p>
                        </div> 
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>อาศัยอยู่กับครอบครัว</p>
                        </div> 
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>เช่าอยู่</p>
                        </div> 
                    </Row>
                </Jumbotron>
            </Container>
        )
    }
}
