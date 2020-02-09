import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import aguacate from '../src/img/aguacate.jpg'

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            search: ''
        };
        this.handleChange = this.handleChange.bind(this)
        this.addSearch = this.addSearch.bind(this)
    }

    addSearch(e){
        fetch("/tienda", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(res => console.log(res)).catch(err => console.error(err));
        e.preventDefault();
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
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
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
                <Row className="mt-4 bg-white">
                    <Col xs="9">
                        <h1>Catálogo de productos</h1>
                    </Col>
                    <Col>
                        <span>¿Qué estás buscando?</span>
                        <Form onSubmit={this.addSearch}>
                            <Form.Group>
                                <Form.Control onChange={this.handleChange} name="search" type="text" placeholder="Buscar producto" />
                            </Form.Group>
                            <Button type="submit" className="center mt-2">Buscar</Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="bg-white">
                    <Col className="producto-lista">
                        <div>
                            <Image src={aguacate} fluid />
                            <h2>Producto</h2>
                            <p><strong>Precio:</strong></p>
                            <p><strong>Unidades disponibles</strong></p>
                            <div>
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    
                    </Col>
                    <Col>
                    
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;
