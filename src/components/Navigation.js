import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation({ currentPage, handlePageChange }) {

    return (
            <Navbar className="color-nav" variant="dark" expand="lg" fixed="top" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#AboutMe" onClick={() => handlePageChange('AboutMe')}>Sam Nielsen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#AboutMe" onClick={() => handlePageChange('AboutMe')}>About Me</Nav.Link>
                            <Nav.Link href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
                            <Nav.Link href="#Resume" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
                            <Nav.Link href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}