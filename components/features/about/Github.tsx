import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl mb-8 text-center break-words" style={{ color: 'transparent', WebkitTextStroke: '2px gold' }}>
        Days I <strong className="text-gold">Code</strong>
      </h1>
      <Row className="flex justify-center">
        <div className="w-full max-w-lg overflow-x-auto">
          <GitHubCalendar
            username="Daniel-Gehlen"
            blockSize={15}
            blockMargin={5}
            theme={{
              light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            fontSize={16}
          />
        </div>
      </Row>
    </div>
  );
}

export default Github;
