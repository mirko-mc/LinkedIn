import { Card, ListGroupItem, } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import "./AsideCard.css"

function AsideCard() {
    return (
        <>
            <div className="d-flex">

                <Card.Img className="img"
                    variant="top"
                    src="https://png.pngtree.com/png-clipart/20211008/ourmid/pngtree-question-mark-icon-png-image_3975287.png">

                </Card.Img>

                <Card.Body>
                    <Card.Title>Marcello Ascani</Card.Title>
                    <p className="item">
                        <ListGroupItem >CEO 6 Co-founder di flatmates</ListGroupItem>

                    </p>
                    <Button variant="light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>Segui</Button>


                </Card.Body>
            </div>
        </>
    )
} export default AsideCard