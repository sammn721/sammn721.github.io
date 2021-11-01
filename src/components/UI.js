import { useState } from "react"
import AboutMe from "./pages/AboutMe"
import { Portfolio } from "./pages/Portfolio"
import { Contact } from "./pages/Contact"
import { Resume } from "./pages/Resume"
import Header from "./Header"
import Footer from "./Footer"

export default function UI() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    const [value, setValue] = useState(0);
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
            <Header currentPage={currentPage} handlePageChange={handlePageChange} value={value} setValue={setValue}/>
            {renderPage()}
            <Footer/>
        </>
    )
}
