import Button from "@restart/ui/esm/Button";

export default function Project(props) {
    return (
        <>
            <Button className={props.className} onClick={() => {window.location = props.deployed}}>
                <div className="project-data">
                    <h4>{props.title}</h4>
                    <p>{props.tech}</p>
                    <p className="github-url">
                        <a href={props.github}>Github</a>
                    </p>
                </div>
            </Button>
        </>
    )
}