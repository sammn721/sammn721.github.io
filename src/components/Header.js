import Navigation from "./Navigation"

export default function Header({ currentPage, handlePageChange, value, setValue }) {
    return (
        <div>
            <Navigation currentpage={currentPage} handlePageChange={handlePageChange} value={value} setValue={setValue}/>
        </div>
    )
}