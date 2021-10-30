import { Container } from "react-bootstrap"
import Navigation from "./Navigation"

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div>
            <Container fluid>
                <Navigation currentpage={currentPage} handlePageChange={handlePageChange}/>
            </Container>
        </div>
    )
}