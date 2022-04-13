import "../Css/Profil.css";
import { Card, ListGroup, ListGroupItem, Button, Modal, FormControl, InputGroup } from 'react-bootstrap';
import kutya from '../Img/kutya.png';
import { useState } from 'react'




function Profil() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>

            <div className="centered">
                <Card className="text-center" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={kutya} />
                    <Card.Body>
                        <Card.Title>A profil adatai</Card.Title>
                        <Card.Text>
                            <ListGroup style={{ textAlign: "left" }} className="list-group-flush">
                                <ListGroupItem >Felhasznalónév: {"Felhasznalónév"}</ListGroupItem>
                                <ListGroupItem >Név: {"{Név}"}</ListGroupItem>
                                <ListGroupItem >Email: {"{Email}"}</ListGroupItem>
                                <ListGroupItem >Cím: {"{Cím}"}</ListGroupItem>
                                <ListGroupItem >Jelszó: {"{Jelszó}"}</ListGroupItem>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                    <Button variant="dark" onClick={handleShow}>
                        Adatok Módosítása
                    </Button>
                </Card>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title >Adatok Módosítása</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >

                        <InputGroup className="mb-3">
                            <InputGroup.Text >Felhasznalónév</InputGroup.Text>
                            <FormControl aria-label="Nev" />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>Név</InputGroup.Text>
                            <FormControl aria-label="Nev" />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>Email</InputGroup.Text>
                            <FormControl aria-label="Email" />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>Cím</InputGroup.Text>
                            <FormControl aria-label="Cim" />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>Jelszó:</InputGroup.Text>
                            <FormControl aria-label="Jelszo" />
                        </InputGroup>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Kilépés
                        </Button>
                        <Button variant="dark" onClick={handleClose}>
                            Mentés
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div >
    );
}

export default Profil