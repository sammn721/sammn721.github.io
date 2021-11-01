import { Card, Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

export default function Project(props) {
    return (
        <>
            <Col>
                <Card className="big-dark text-white pcard">
                    <div className={props.img}>
                        <Card.Img/>
                    </div>
                    <Card.ImgOverlay>
                        <div className="projectlabel">
                            <Card.Title><a href={props.deployed}>{props.title}</a></Card.Title>
                            <Card.Text>{props.tech}<br/>
                            <div className="github"> 
                                <a href={props.github}><Github/></a>
                            </div>
                            </Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </>
    )
}