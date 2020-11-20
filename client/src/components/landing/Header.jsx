import React, { Component } from 'react';
import { Jumbotron, Container, Image, Row, Col, Button } from 'react-bootstrap';

import logo from '../../img/zenyu-logo.svg';

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <Jumbotron fluid>
            <Container className="header">
              <Row className="justify-content-center">
                <Image src={logo} className="logo"/>
              </Row>
              <Row className="justify-content-center">
                <Col className="text-center" md="auto">
                  <h2>The journal designed for mindfulness & self-growth.</h2>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Button href="#features" className="btn-custom">Learn more</Button>
              </Row>
            </Container>
          </Jumbotron>
        </div>
      </div>      
    );
  }
}

export default Header;
