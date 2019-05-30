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
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    handleChange(){
      if(!this.state.shown1 || !this.state.shown2 ){
        this.props.history.push("/question5")
      }else{
        this.setState({ showModal: true });  
      }
    }
    openModal(){
      this.setState({ showModal: true });  
    }
    closeModal(){
      this.setState({ showModal: false });  
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
    render(){
        var hidden1 = {
            backgroundColor: this.state.shown1 ? "#141414" : "grey"
        }
        var hidden2 = {
          backgroundColor: this.state.shown2 ? "#141414" : "grey"
        }
        return(
            <Container className="container">
                <Jumbotron>
                    <h1>4. ฉันคิดว่าหากเราต้องโกหกเพื่อให้คนอื่นไม่เดือดร้อน ก็เป็นเรื่องที่รับได้  </h1>
                    <Row>
                        <div className="answerContainer" onClick={this.toggle1.bind(this)} style={ hidden1 }>
                            <p>ใช่</p>
                        </div> 
                        <div className="answerContainer" onClick={this.toggle2.bind(this)} style={ hidden2 }>
                            <p>ไม่ใช่</p>
                        </div> 
                    </Row>
                    <Modal show={this.state.showModal} onHide={this.closeModal} className="modalColor">
                      <Modal.Header closeButton>
                      </Modal.Header>
                      <Modal.Body>
                        <h4 className="text-center">Please Select 1 of them..</h4>

                      </Modal.Body>
                      <Modal.Footer>
                          <Button onClick={this.closeModal}>ตกลง</Button>
                      </Modal.Footer>
                    </Modal>
                    <Row className="btnCenter">
                        <Button  className="btn" variant="success" size="lg" onClick={this.handleChange}>ต่อไป</Button>
                    </Row>
                </Jumbotron>
            </Container>
        )
    }
}
