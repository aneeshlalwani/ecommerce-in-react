import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            {/* className="ms-auto my-2 my-lg-0"style={{ maxHeight: '300px' }} navbarScroll */}
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '300px' }} navbarScroll>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header