import { Card, Col, Container, Row } from "react-bootstrap"
import Project from "../Project"

const projectData = [
    {
        "title": "Bar Hoppers",
        "tech": "React.js / GraphQL / MUI",
        "deployed": "https://dn-bar-hoppers.herokuapp.com/",
        "github": "https://github.com/DN-Vanguard/bar-hoppers",
        "className": "project bar-hoppers"
    },
    {
        "title": "Budgie",
        "tech": "IndexedDB / Mongoose / Express",
        "deployed": "https://budgie-budget-budget-tracker.herokuapp.com/",
        "github": "https://github.com/sammn721/budgie",
        "className": "project budgie"
    },
    {
        "title": "Regex tutorial: hex codes",
        "tech": "Markdown",
        "deployed": "https://gist.github.com/sammn721/358d56f24f112075f0edcad6ed0a7c59",
        "github": "https://gist.github.com/sammn721/358d56f24f112075f0edcad6ed0a7c59",
        "className": "project regex"
    },
    {
        "title": "E-Commerce refactor",
        "tech": "Express.js / MySQL / Sequelize",
        "deployed": "https://github.com/sammn721/retail-back-end",
        "github": "https://github.com/sammn721/retail-back-end",
        "className": "project ecommerce"
    },
    {
        "title": "Worker Lurker 🧑🏻‍💻",
        "tech": "MySQL / Inquirer.js",
        "deployed": "https://github.com/sammn721/worker-lurker",
        "github": "https://github.com/sammn721/worker-lurker",
        "className": "project worker-lurker"
    },
    {
        "title": "READMEme",
        "tech": "JavaScript / Node.js / Inquirer.js",
        "deployed": "https://github.com/sammn721/READMEme",
        "github": "https://github.com/sammn721/READMEme",
        "className": "project readmeme"
    },
    {
        "title": "BikeTrails",
        "tech": "JavaScript / jQuery / Materialize",
        "deployed": "https://dn-vanguard.github.io/BikeTrails",
        "github": "https://github.com/DN-Vanguard/BikeTrails",
        "className": "project biketrails"
    },
    {
        "title": "Click4cast",
        "tech": "JavaScript / jQuery / Bootstrap",
        "deployed": "https://sammn721.github.io/click-4-cast",
        "github": "https://github.com/sammn721/click-4-cast",
        "className": "project weather"
    },
    {
        "title": "Work Day Scheduler",
        "tech": "JavaScript / jQuery / Bootstrap",
        "deployed": "https://sammn721.github.io/workday-planner",
        "github": "https://github.com/sammn721/workday-planner",
        "className": "project scheduler"
    }
]

export function Portfolio() {
    return (
        <>
            <div className="aboutmebanner">
                <h1>portfolioooo</h1>
            </div>
            <Container >
                <Row>
                    <Col sm={2}>
                        <h2>Projects</h2>
                    </Col>
                    <Col sm={10}>
                        <Container >
                            <Row >
                            {projectData.map((project) => (
                                <Card>
                                    <Project title={project.title} tech={project.tech} deployed={project.deployed} github={project.github} className={project.className} />
                                </Card>
                            ))}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}