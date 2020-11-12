
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './App.css';

function App() {
  return (


//     <Jumbotron>
//   <h1>Hello, world!</h1>
//   <p>
//     This is an example of a jumbotron 
//   </p>
//   <p>
//     <Button variant="primary">Learn more</Button>
//   </p>
// </Jumbotron>



<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

//testing 

  )
};

export default App; 
