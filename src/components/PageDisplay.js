import { useState } from "react"
import Navigation from "./Navigation"
import AboutMe from "./pages/AboutMe"
import { Portfolio } from "./pages/Portfolio"
import { Contact } from "./pages/Contact"
import { Resume } from "./pages/Resume"
import Header from "./Header"
import Footer from "./Footer"

export default function PageDisplay() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer/>
        </>
    )
}
