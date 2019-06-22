import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`
  font-size: 10rem;
  color: rebeccapurple;
`

const Die = (props) => {
  console.log(props);
  return(
      <Icon className={`fas fa-dice-${props.number}`}></Icon>
  )
}


export default Die
