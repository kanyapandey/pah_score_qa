import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button,InputGroup,FormControl,Modal } from 'react-bootstrap'
import './Questions.css'

export default class Question4 extends Component {
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
      this.props.history.push("/question5")
    }
    render(){
        return(
            <Container className="container">
                <Jumbotron>
                    <h1>4. ฉันคิดว่าหากเราต้องโกหกเพื่อให้คนอื่นไม่เดือดร้อน ก็เป็นเรื่องที่รับได้  </h1>
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
