import React from "react";
import { Row, Col, Container, Button, Form, InputGroup } from "react-bootstrap";

class Counter extends React.Component {
  render() {
    return (
      <>
        <Form.Control aria-label="First name" type="number" className="text-center" value={0} />
      </>
    )
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <Container>
//           <Row>
//             <Col></Col>
//             <Col md={6} className="mt-5">
//               <InputGroup className="mt-5">
//                 <Button className="btn-danger" onClick={() => kurang()}>- Kurang</Button>
//                 <Button onClick={() => tambah()}>+ Tambah</Button>
//               </InputGroup>
//             </Col>
//             <Col></Col>
//           </Row>
//         </Container>
//       </>
//     )
//   }
// }



const App = () => {
  const kurang = () => {
    return alert('Angka di kurang');
  }

  const tambah = () => {
    return alert('Angka di tambah');
  }

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col md={6} className="mt-5">
            <InputGroup className="mt-5">
              <Button className="btn-danger" onClick={() => kurang()}>- Kurang</Button>
              <Form.Control aria-label="First name" type="number" className="text-center" value={0} />
              <Button onClick={() => tambah()}>+ Tambah</Button>
            </InputGroup>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default App;