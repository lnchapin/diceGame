import React, { Component } from 'react';
import Die from './Die';
import { Row, Col } from 'reactstrap'

class RollDice extends Component {
  state={
    die1: "one",
    die2: "two",
    shake: false,
    clickable: true
  }

  rollMe = (e) => {
    this.setState({clickable: false})
    let dieSides = ['one', 'two', 'three', 'four', 'five', 'six']
    let newOne = dieSides[Math.floor(Math.random()*(dieSides.length))]
    let newTwo = dieSides[Math.floor(Math.random()*(dieSides.length))]
    setTimeout(() => {
      this.setState(() => ({clickable: true, die1: newOne, die2: newTwo}))
    }, 1000);
  }

  render(){
    return(
      <>
        <Row>
          <Col sm={12} md={6}>
            <Die number={this.state.die1} />
          </Col>
          <Col sm={12} md={6}>
            <Die number={this.state.die2} />
          </Col>
        </Row>
          {this.state.clickable ? <button onClick={this.rollMe}>Roll</button> : <button disabled>Rolling</button>}
      </>
    )
  }
}

export default RollDice;
