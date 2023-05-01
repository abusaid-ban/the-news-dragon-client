import { Button, Container, Nav,  Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <Container>
            <div className='text-center pt-3'>
                <img src={logo} alt="" />
                <h6 className='text-secondary'>Journalism Without Fear or Favour</h6>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-secondary px-2 py-2 rounded'>
                <Button variant="danger">Latest </Button>
                <Marquee className='text-danger ' speed={50}>
                <h5>I can be a React component, multiple React components, or just some text. I can be a React component, multiple React components, or just some text.</h5>
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
           
          </Nav>
          <Nav className='d-flex align-items-center'>
            <Nav.Link href="#deets"><  FaUser/></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Header;