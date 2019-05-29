import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button,InputGroup,FormControl } from 'react-bootstrap'
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
    toggle1() {
      this.setState({
        shown1: !this.state.shown1
      });
    }
    toggle2() {
      this.setState({
        shown2: !this.state.shown2
      });
    }
    toggle3() {
      this.setState({
        shown3: !this.state.shown3
      });
    }
    toggle4() {
        this.setState({
          shown4: !this.state.shown4
        });
    }
    toggle5() {
    this.setState({
        shown5: !this.state.shown5
    });
    }
    render(){
        var hidden1 = {
            backgroundColor: this.state.shown1 ? "#141414" : "grey"
        }
        var hidden2 = {
          backgroundColor: this.state.shown2 ? "#141414" : "grey"
        }
        var hidden3 = {
            backgroundColor: this.state.shown3 ? "#141414" : "grey"
        }
        var hidden4 = {
            backgroundColor: this.state.shown4 ? "#141414" : "grey"
        }
        var hidden5 = {
            backgroundColor: this.state.shown5 ? "#141414" : "grey"
        }
        return(
            <Container className="container">
                <Jumbotron>
                    <h1>2. ลักษณะของที่พักอาศัยที่คุณอาศัยอยู่ในปัจจุบัน?</h1>
                    <Row>
                        <div className="answerContainer" onClick={this.toggle1.bind(this)} style={ hidden1 }>
                            <p>บ้านเดี่ยว</p>
                        </div> 
                        <div className="answerContainer" onClick={this.toggle2.bind(this)} style={ hidden2 }>
                            <p>ตึกแถว</p>
                        </div> 
                        <div className="answerContainer" onClick={this.toggle3.bind(this)} style={ hidden3 }>
                            <p>ทาวน์โฮม</p>
                        </div> 
                        <div className="answerContainer" onClick={this.toggle4.bind(this)} style={ hidden4 }>
                            <p>หอพัก</p>
                        </div> 
                        <div className="answerContainer" onClick={this.toggle5.bind(this)} style={ hidden5 }>
                            <p>คอนโด</p>
                        </div> 
                    </Row>
                    <Row className="btnCenter">
                        <Button  className="btn" variant="success" size="lg" onClick={this.handleChange}>Next</Button>
                    </Row>
                </Jumbotron>
            </Container>
        )
    }
}
