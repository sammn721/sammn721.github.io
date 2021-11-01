import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation({ currentPage, handlePageChange, value, setValue }) {

    return (
            <Navbar className="color-nav" variant="dark" expand="lg" fixed="top" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#AboutMe" onClick={() => {setValue(0); handlePageChange('AboutMe')}}>Sam Nielsen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#AboutMe" onClick={() => {setValue(0); handlePageChange('AboutMe')}}>About Me</Nav.Link>
                            <Nav.Link href="#Portfolio" onClick={() => {setValue(1); handlePageChange('Portfolio')}}>Portfolio</Nav.Link>
                            <Nav.Link href="#Resume" onClick={() => {setValue(2); handlePageChange('Resume')}}>Resume</Nav.Link>
                            <Nav.Link href="#Contact" onClick={() => {setValue(3); handlePageChange('Contact')}}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}