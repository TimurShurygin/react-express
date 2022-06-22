import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, Card} from "react-bootstrap";

function Catalog() {

    const[catalog, setCatalog] = useState([]) // хранилище

    useEffect(() => {
        fetch('http://localhost:8000/catalog')
            .then(res => res.json())
            .then(data => setCatalog(data)) // получение данных с сервера
    }, [])

    return (
    <Container className="py-4">
        <Row>
            <Col xs={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>Автомобили</ListGroup.Item>
                    <ListGroup.Item>Грузовики и спецтехника</ListGroup.Item>
                    <ListGroup.Item>Запчасти</ListGroup.Item>
                    <ListGroup.Item>Шины</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col sxs={9}>
                <Row>
                {
                    catalog.map(el => (  //перебираем каталог и разбрасываем всё по своим местам
                        <Card className="mt-5">
                            <Card.Img variant="top" src={el.img} />
                            <Card.Body>
                                <Card.Title>
                                    {el.firm} {el.model}, {el.year}
                                </Card.Title>
                                <Card.Text>
                                    <span>Цена: {el.price} руб.</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }

                </Row>
            </Col>
        </Row>
    </Container>
    )
}

export default Catalog