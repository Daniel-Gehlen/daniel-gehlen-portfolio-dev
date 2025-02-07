"use client";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";

export default function About() {
  return (
    <Container fluid className="about-section bg-black bg-opacity-70 min-h-screen flex items-center justify-center">
      <Container className="text-center">
        {/* Título Principal */}
        <h1 className="text-gold text-4xl mb-8">
          About <strong className="text-gold">Me</strong>
        </h1>

        {/* Seção: Things I Love */}
        <Row className="mb-8">
          <Col>
            <AboutCard />
          </Col>
        </Row>

        {/* Seção: Core Skills */}
        <Row className="mb-8">
          <Col>
            <Techstack />
          </Col>
        </Row>

        {/* Seção: Tools I Use */}
        <Row className="mb-8">
          <Col>
            <Toolstack />
          </Col>
        </Row>

        {/* Seção: GitHub Contributions (Opcional) */}
        <Row className="mb-8">
          <Col>
            <Github />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}