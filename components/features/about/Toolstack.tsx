import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiIntellijidea,
  SiNetlify,
  SiFigma,
  SiInkscape,
  SiGimp,
  SiPostman,
  SiInsomnia,
  SiSwagger,
  SiGithub,
  SiGitlab,
} from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";

function Toolstack() {
  return (
    <div>
      <h2 className="text-2xl mb-8 text-center" style={{ color: 'transparent', WebkitTextStroke: '2px gold' }}>
        Tools I Use
      </h2>

      {/* Code Editors */}
      <div className="mb-8">
        <h3 className="text-gold text-xl mb-4 text-center">Code Editors</h3>
        <Row className="flex flex-wrap justify-center gap-6">
          <Col xs={4} md={2} className="tech-icons text-6xl">
            <TbBrandVscode />
            <p className="text-sm mt-2">VS Code</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons text-6xl">
            <SiIntellijidea />
            <p className="text-sm mt-2">IntelliJ IDEA</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons text-6xl">
            <SiNetlify />
            <p className="text-sm mt-2">NetBeans</p>
          </Col>
        </Row>
      </div>

      {/* Design */}
      <div className="mb-8">
        <h3 className="text-gold text-xl mb-4 text-center">Design</h3>
        <Row className="flex flex-wrap justify-center gap-6">
          <Col xs={4} md={2} className="tech-icons text-6xl">
            <SiFigma />
            <p className="text-sm mt-2">Figma</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons text-6xl">
            <SiInkscape />
            <p className="text-sm mt-2">Inkscape</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons text-6xl">
            <SiGimp />
            <p className="text-sm mt-2">GIMP</p>
          </Col>
        </Row>
      </div>

      {/* API Testing */}
      <div className="mb-8">
        <h3 className="text-gold text-xl mb-4 text-center">API Testing</h3>
        <Row className="flex flex-wrap justify-center gap-6">
          <Col xs={4} md={2} className="tech-icons text-6xl">
            <SiPostman />
            <p className="text-sm mt-2">Postman</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons text-6xl">
            <SiInsomnia />
            <p className="text-sm mt-2">Insomnia</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons text-6xl">
            <SiSwagger />
            <p className="text-sm mt-2">Swagger</p>
          </Col>
        </Row>
      </div>

      {/* Version Control */}
      <div className="mb-8">
        <h3 className="text-gold text-xl mb-4 text-center">Version Control</h3>
        <Row className="flex flex-wrap justify-center gap-6">
          <Col xs={4} md={2} className="tech-icons text-6xl">
            <SiGithub />
            <p className="text-sm mt-2">GitHub</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons text-6xl">
            <SiGitlab />
            <p className="text-sm mt-2">GitLab</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Toolstack;