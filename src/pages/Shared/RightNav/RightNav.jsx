import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
import Qzone from "../Qzone/Qzone";
import './RightNav.css'

const RightNav = () => {
    return (
        <div className="mt-3">
            <h2>Login With</h2>
            <Button className="mb-1" variant="outline-primary" size="lg">  <FaGoogle /> Login With Google</Button>
            <Button variant="outline-success" size="lg"> <FaGithub /> Login With Github</Button>
            <div className="my-3">
                <h3>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook />  Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitterSquare /> Tweeter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="bg-secondary p-1 rounded">
                <Qzone></Qzone>
            </div>
            <div className="bg my-3 px-3 py-5 text-white text-center">
              <h2>Create an Amazing Newspaper</h2>
              <h5 className="mt-3">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</h5>
              <Button className="mt-5"
               variant="danger">Learn More </Button>
            </div>
        </div>
    );
};

export default RightNav;