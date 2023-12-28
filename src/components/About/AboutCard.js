import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Gupta </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />I am a pursuing MCA in Computer Science From LPU.
            <br />
            <br />
            Passionate about crafting innovative software solutions, I thrive on turning complex ideas into functional and user-friendly applications
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "HARD WORK BEATS TALENT WHEN TALENT DOESN'T WORK HARD.."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
