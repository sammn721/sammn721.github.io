import Footer from "../Footer"
import Header from "../Header"

export default function AboutMe(){
    return (
            <div>
                <Header />
                    <h2>About Me</h2>
                    <p>I'm an aspiring full-stack web developer, currently based in Seattle, WA. Please explore my portfolio, built using <a href="https://create-react-app.dev/">Create React App</a> and <a href="https://mui.com/">MUI</a>.</p>
                <Footer />
            </div>
    )
}