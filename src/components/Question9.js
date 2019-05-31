import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button,InputGroup,FormControl,Modal } from 'react-bootstrap'
import './Questions.css'

export default class Question9 extends Component {
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
      this.props.history.push("/question10")
    }
    render(){
        return(
            <Container className="container">
                <Jumbotron>
                    <h1>9. หากพบเหตุร้าย ฉันจะรีบแจ้งทางการทันที  </h1>
                    <Row>
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>โทรแจ้ง = 5</p>
                        </div> 
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>ไม่โทร = 0</p>
                        </div> 
                    </Row>
                </Jumbotron>
            </Container>
        )
    }
}
