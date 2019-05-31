import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button,InputGroup,FormControl,Modal } from 'react-bootstrap'
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
    render(){
        return(
            <Container className="container">
                <Jumbotron>
                    <h1>8. หากคุณเห็นเพื่อนข้างบ้านของคุณ ซึ่งเป็นสามีภรรยากัน ทะเลาะเบาะแว้ง ทำร้ายร่างกายกัน คุณจะ…  </h1>
                    <Row>
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>เข้าไปประนีประนอม</p>
                        </div> 
                        <div className="answerContainer" onClick={this.handleChange}>
                            <p>ไม่ยุ่งเรื่องส่วนตัวของสามีภรรยา</p>
                        </div> 
                        <div className="answerContainer" onClick={this.handleChange} >
                            <p>โทรแจ้งตำรวจ</p>
                        </div> 
                    </Row>
                </Jumbotron>
            </Container>
        )
    }
}
