import { Link } from 'react-router-dom';

// bootstrap import
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// custom css styling
import "./style.css";

// [x] Must be rendered across the entire site
// [x] Must Contain a Navbar

function Header() {
  
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="flex-spacer">
          <Navbar.Brand className="brand-name" as={Link} to="/">Jenny Siu</Navbar.Brand>
        </div>
        
        <div className="navbar-links">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto links-container">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;