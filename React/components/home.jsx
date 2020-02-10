import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form, { FormRow } from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import aguacate from '../src/img/aguacate.jpg';
import appAuth from "../src/base";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            productos: []
        }
    }

    componentDidMount(){
        this.fetchProductos();
    }

    fetchProductos(){
        fetch("/tienda")
        .then(res => res.json())
        .then(data => {
                        console.log(data)
                        this.setState({productos: data})
        })
    }

    render() {
        return(
            <Container>
                <Row>
                    <Navbar bg="light" expand="lg" className="w-100">
                        <Navbar.Brand href="#home">La Bodega</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <Nav.Link onClick={() => appAuth.auth().signOut()}>
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
                <Row className="mt-4 bg-white pt-3">
                    <Col xs="9">
                        <h1>Catálogo de productos</h1>
                    </Col>
                    <Col>
                        <span>¿Qué estás buscando?</span>
                        <Form onSubmit={this.addSearch}>
                            <Form.Group>
                                <Form.Control name="search" type="text" placeholder="Buscar producto" />
                            </Form.Group>
                            <Button type="submit" className="center mt-2">Buscar</Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="bg-white py-2">
                    {
                    this.state.productos.map(productos => {
                        return(
                            <Col md={3} className="producto-lista py-3" key={productos._id}>
                                <div>
                                    <Image src={"./img/"+productos.nombre+".jpg"} fluid />
                                    <h2>{productos.nombre}</h2>
                                    <p><strong>Precio: </strong>{productos.precio}</p>
                                    <p><strong>Unidades disponibles: </strong>{productos.unidades}</p>
                                    <div className="d-flex">
                                        <Button variant="primary">Primary</Button>
                                        <Form className="ml-3 d-flex">
                                            <Button className="ml-auto" variant="secondary">Secondary</Button>
                                            <Form.Group className="ml-1">
                                                <Form.Control name="cantidad" type="number" placeholder="1" />
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container>
        )
    }
}

export default Home;
