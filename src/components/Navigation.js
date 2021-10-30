import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import AboutMe from "./pages/AboutMe";


export default function Navigation({ currentPage, handlePageChange }) {

    return (
        <>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#AboutMe">Sam Nielsen</Navbar.Brand>
                        <Nav className="me-auto flex-row">
                            <Nav.Link href="#AboutMe" onClick={() => handlePageChange('AboutMe')}>About Me</Nav.Link>
                            <Nav.Link href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
                            <Nav.Link href="#Resume" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
                            <Nav.Link href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </>
    )
}