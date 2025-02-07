import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <div className="text-center">
      <h1 className="project-heading text-gold text-2xl mb-4">
        Days I <strong className="text-gold">Code</strong>
      </h1>
      <Row className="flex justify-center">
        <GitHubCalendar
          username="Daniel-Gehlen"
          blockSize={10}
          blockMargin={5}
          theme={{
            light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
          fontSize={16}
        />
      </Row>
    </div>
  );
}

export default Github;