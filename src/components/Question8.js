import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button,InputGroup,FormControl } from 'react-bootstrap'
import './Questions.css'

export default class Question8 extends Component {
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
      this.props.history.push("/question9")
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
        return(
            <Container className="container">
                <Jumbotron>
                    <h1>8. หากคุณเห็นเพื่อนข้างบ้านของคุณ ซึ่งเป็นสามีภรรยากัน ทะเลาะเบาะแว้ง ทำร้ายร่างกายกัน คุณจะ…  </h1>
                    <Row>
                        <div className="answerContainer" onClick={this.toggle1.bind(this)} style={ hidden1 }>
                            <p>เข้าไปประนีประนอม</p>
                        </div> 
                        <div className="answerContainer" onClick={this.toggle2.bind(this)} style={ hidden2 }>
                            <p>ไม่ยุ่งเรื่องส่วนตัวของสามีภรรยา</p>
                        </div> 
                        <div className="answerContainer" onClick={this.toggle3.bind(this)} style={ hidden3 }>
                            <p>โทรแจ้งตำรวจ</p>
                        </div> 
                    </Row>
                    <Row className="btnRight">
                        <Button  className="btn" variant="success" size="lg" onClick={this.handleChange}>Next</Button>
                    </Row>
                </Jumbotron>
            </Container>
        )
    }
}
