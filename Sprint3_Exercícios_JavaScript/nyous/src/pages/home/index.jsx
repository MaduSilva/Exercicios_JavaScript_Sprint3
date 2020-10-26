import React from 'react';
import { Carousel, Jumbotron, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';

const Home = () => {
    return (
        <div>
            <Menu />
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/8i4BBbz.png"
                        alt="Primeira imagem"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/Sfb7JcC.png"
                        alt="Segunda imagem"
                    />

                </Carousel.Item>
            </Carousel>
            <Jumbotron className="text-center">
                <h1>Diversos eventos em um só local!</h1>
                <p>
                    Viva tudo que te conecta, eventos em um só clique</p>
                <p>
                    <Button variant="primary" href="/login">Login</Button><Button variant="success" href="/cadastro">Cadastre-se</Button>
                </p>
            </Jumbotron>
            <Container>
                <Row className="text-center">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.aovivodebrasilia.com.br/wp-content/uploads/2020/01/Curso-de-Teatro-Neia-e-Nando-Cr%C3%A9dito-Divulga%C3%A7%C3%A3o-1000x600.jpg" />
                            <Card.Body>
                                <Card.Title>Tecnologia</Card.Title>
                                <Card.Text>
                                    Aqui você tem acesso a eventos em todo brasil, com todas as informações necessárias
                        </Card.Text>
                                <Button variant="primary">Saiba mais</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i2.wp.com/www.sandrapaschoal.com.br/wp-content/uploads/2015/10/MG_6304-1000x600.png" />
                            <Card.Body>
                                <Card.Title>Personalização</Card.Title>
                                <Card.Text>
                                Oferecemos soluções que simplificam a gestão de todas as etapas do evento.
                            </Card.Text>
                                <Button variant="primary">Saiba mais</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.musicjournal.com.br/wp-content/uploads/2020/09/blackpink-YG-Entertainment-1000x600.jpg" />
                            <Card.Body>
                                <Card.Title>Inovação</Card.Title>
                                <Card.Text>
                                Soluções personalizadas para todo tipo de evento. Cadastre agora mesmo 
                            </Card.Text>
                                <Button variant="primary">Saiba mais</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Rodape />
        </div>
    )
}

export default Home;