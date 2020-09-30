import React from "react";
import { Container } from "react-bootstrap";
import Members from "../../components/members/members";
export default function index() {
  return (
    <Container>
      <h1 className="mb-4">Andela Members</h1>
      <Members />
    </Container>
  );
}
