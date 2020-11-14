
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
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

<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}

//testing 

  )
};

export default App; 
