import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button,InputGroup,FormControl,Modal } from 'react-bootstrap'
import './Questions.css'

export default class Question12 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: false,
          shown1: true,
          shown2: true,
          shown3: true,
          shown4: true
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(){
      this.props.history.push("/question13")
    }
    render(){
        return(
            <Container className="container">
                <Jumbotron>
                    <h1>12. ความถี่ในการดื่มแอลกอฮอล์?  </h1>
                    <Row>
                        <div className="answerContainer" onClick={this.handleChange}>
                            <p>ไม่ดื่ม หรือ 1-4 ครั้ง/เดือน</p>
                        </div> 
                        <div className="answerContainer" onClick={this.handleChange}>
                            <p>5-8 ครั้ง/เดือน</p>
                        </div> 
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p> >8 ครั้ง/เดือน</p>
                        </div> 
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>ทุกวัน</p>
                        </div> 
                    </Row>
                </Jumbotron>
            </Container>
        )
    }
}
