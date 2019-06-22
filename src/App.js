import React from 'react';
import RollDice from './Components/RollDice';
import { Container} from 'reactstrap'
import './App.css'


function App() {
  return (
    <Container className="App">
      <RollDice />
    </Container>
  );
}

export default App;
