import Navigation from "./Navigation"

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div>
            <Navigation currentpage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    )
}