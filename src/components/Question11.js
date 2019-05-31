import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button,InputGroup,FormControl,Modal } from 'react-bootstrap'
import './Questions.css'

export default class Question11 extends Component {
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
      this.props.history.push("/question12")
    }
    render(){
        return(
            <Container className="container">
                <Jumbotron>
                    <h1>11. ความถี่ในการออกกำลังกาย?  </h1>
                    <Row>
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>ไม่ออก</p>
                        </div> 
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>1-2 ครั้ง</p>
                        </div> 
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>3 ครั้ง หรือมากกว่า</p>
                        </div> 
                    </Row>
                </Jumbotron>
            </Container>
        )
    }
}
