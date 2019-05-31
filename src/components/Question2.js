import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button,InputGroup,FormControl,Modal } from 'react-bootstrap'
import './Questions.css'

export default class Question2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: false,
          shown1: true,
          shown2: true,
          shown3: true,
          shown4: true,
          shown5: true
          
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
      this.props.history.push("/question3")
    }
    
    render(){
        return(
            <Container className="container">
                <Jumbotron>
                    <h1>2. ลักษณะของที่พักอาศัยที่คุณอาศัยอยู่ในปัจจุบัน?</h1>
                    <Row>
                        <div className="answerContainer" onClick={this.handleChange} >
                              <p>บ้านเดี่ยว</p>
                          </div> 
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>ตึกแถว</p>
                        </div> 
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>ทาวน์โฮม</p>
                        </div> 
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>หอพัก</p>
                        </div> 
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>คอนโด</p>
                        </div> 
                    </Row>
                </Jumbotron>
            </Container>
        )
    }
}
