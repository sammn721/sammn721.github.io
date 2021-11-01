import { Col, Container, Image, Row } from "react-bootstrap"
import me from '../../assets/winter-photo.jpg'

export default function AboutMe(){
    return (
        <>
            <div className="banner">
                <h1>Welcome!</h1>
            </div>
            <div className="pageview">
                <Container className="light-text">
                    <Row>
                        <Col sm={2}>
                            <div>
                                <h2>About Me</h2>
                            </div>
                        </Col>
                        <Col sm={10}>
                            <div className="pagecontent">
                                <p><Image src={me} roundedCircle className="avatar"/>
                                I'm an aspiring full-stack web developer, based in Seattle, WA.<br/>Please explore my constantly evolving portfolio, currently built with <a href="https://create-react-app.dev/">Create React App</a> and <a href="https://react-bootstrap.github.io/">React Bootstrap</a>.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}