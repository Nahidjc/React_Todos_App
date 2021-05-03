import React from "react";
import { Col, Container, Row } from "reactstrap";
import Todos from "./components/todos";

const app = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Todos />
        </Col>
      </Row>
    </Container>
  );
};

export default app;
