import React from 'react';
import { Navbar, Nav, Container, Card } from 'react-bootstrap';
import './App.css'; // Importez le fichier CSS

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container>
          <h1>React Bootstrap Example</h1>
          <div className="card-container">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  This is the first card.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  This is the second card.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  This is the third card.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;