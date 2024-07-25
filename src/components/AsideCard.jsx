import { Card, ListGroupItem, } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import "./AsideCard.css"

function AsideCard({profilo}) {
    return (
        <>
            <div className="d-flex">

                <Card.Img className="img"
                    variant="top"
                    src={profilo.image}>

                </Card.Img>

                <Card.Body>
                    <Card.Title>{profilo.name}</Card.Title>
                    <p className="item">
                        <ListGroupItem >{profilo.surname}</ListGroupItem>
                        <ListGroupItem >{profilo.email}</ListGroupItem>

                    </p>
                    <Button variant="light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>Segui</Button>


                </Card.Body>
            </div>
        </>
    )
} export default AsideCard