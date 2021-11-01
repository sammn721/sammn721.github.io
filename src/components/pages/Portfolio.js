import { Card, Col, Container, Row } from "react-bootstrap"
import Project from "../Project"

const projectData = [
    {
        "title": "Bar Hoppers",
        "tech": "MERN stack / GraphQL / MUI",
        "deployed": "https://dn-bar-hoppers.herokuapp.com/",
        "github": "https://github.com/DN-Vanguard/bar-hoppers",
        "img": "barhoppers project"
    },
    {
        "title": "Budgie",
        "tech": "IndexedDB / Mongoose / Express",
        "deployed": "https://budgie-budget-budget-tracker.herokuapp.com/",
        "github": "https://github.com/sammn721/budgie",
        "img": "budgie project"
    },
    {
        "title": "Regex tutorial: hex codes",
        "tech": "Markdown",
        "deployed": "https://gist.github.com/sammn721/358d56f24f112075f0edcad6ed0a7c59",
        "github": "https://gist.github.com/sammn721/358d56f24f112075f0edcad6ed0a7c59",
        "img": "regex project"
    },
    {
        "title": "E-Commerce refactor",
        "tech": "Express.js / MySQL / Sequelize",
        "deployed": "https://github.com/sammn721/retail-back-end",
        "github": "https://github.com/sammn721/retail-back-end",
        "img": "ecommerce project"
    },
    {
        "title": "Worker Lurker 🧑🏻‍💻",
        "tech": "MySQL / Inquirer.js",
        "deployed": "https://github.com/sammn721/worker-lurker",
        "github": "https://github.com/sammn721/worker-lurker",
        "img": "workerlurker project"
    },
    {
        "title": "READMEme",
        "tech": "JavaScript / Node.js / Inquirer.js",
        "deployed": "https://github.com/sammn721/READMEme",
        "github": "https://github.com/sammn721/READMEme",
        "img": "readmeme project"
    },
    {
        "title": "BikeTrails",
        "tech": "JavaScript / jQuery / Materialize",
        "deployed": "https://dn-vanguard.github.io/BikeTrails",
        "github": "https://github.com/DN-Vanguard/BikeTrails",
        "img": "biketrails project"
    },
    {
        "title": "Click4cast",
        "tech": "JavaScript / jQuery / Bootstrap",
        "deployed": "https://sammn721.github.io/click-4-cast",
        "github": "https://github.com/sammn721/click-4-cast",
        "img": "weather project"
    },
    {
        "title": "Work Day Scheduler",
        "tech": "JavaScript / jQuery / Bootstrap",
        "deployed": "https://sammn721.github.io/workday-planner",
        "github": "https://github.com/sammn721/workday-planner",
        "img": "scheduler project"
    },
    {
        "title": "Password Genie",
        "tech": "JavaScript / HTML",
        "deployed": "https://sammn721.github.io/password-genie",
        "github": "https://github.com/sammn721/password-genie",
        "img": "pwgen project"
    }
]

export function Portfolio() {
    return (
        <>
            <div className="banner">
                <h1>portfolioooo</h1>
            </div>
            <div className="pageview">
                <Container className="light-text">
                    <Row>
                        <Col sm={2}>
                            <h2>Projects</h2>
                        </Col>
                        <Col sm={10}>
                            <div className="pagecontent">
                                <Row xs={1} md={2}>
                                {projectData.map((project) => (
                                    <Project
                                    title={project.title}
                                    tech={project.tech}
                                    deployed={project.deployed}
                                    github={project.github}
                                    img={project.img}
                                    key={project.title}/>
                                ))}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}