import React, { useState } from "react";
import { Row, Col, Container, Button, Form, InputGroup } from "react-bootstrap";


const App = () => {
    const [count, setCount] = useState(Number);
    return (
        <>
            <Container>
                <Row>
                    <Col></Col>
                    <Col md={6} className="mt-5">
                        <InputGroup className="mt-5">
                            <Button className="btn-danger" onClick={() => setCount(count - 1)} disable={count < 1}>- Kurang</Button>
                            <Form.Control aria-label="First name" type="number" className="text-center" value={count} />
                            <Button onClick={() => setCount(count + 1)}>+ Tambah</Button>
                        </InputGroup>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}

export default App;