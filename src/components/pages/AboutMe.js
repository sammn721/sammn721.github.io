import { Col, Container, Image, Row } from "react-bootstrap"
import me from '../../assets/winter-photo.jpg'

export default function AboutMe(){
    return (
        <>
            <div className="jumbotron">
                <h1>Welcome!</h1>
            </div>
            <div>
                <Container >
                    <Row>
                        <Col sm={2}>
                            <Image src={me} roundedCircle fluid/>
                        </Col>
                        <Col sm={10}>
                            <h3>About Me</h3>
                            <p>I'm an aspiring full-stack web developer, currently based in Seattle, WA.<br/>Please explore my constantly evolving portfolio, currently built with <a href="https://create-react-app.dev/">Create React App</a> and <a href="https://react-bootstrap.github.io/">React Bootstrap</a>.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}