import React from 'react';
import { Row, Col } from 'react-materialize';
import '../../styles/components/landing/_card.scss';

export default function Card({title, description, action, descriptionStyle }) {
  return (
    <div className="card-container">
      <Row>
        <Col s={10} offset="s1">
          <h4 className="center-align">{title}</h4>
        </Col>
      </Row>
      <Row>
        <Col s={10} offset="s1">
          <p style={descriptionStyle}>{description}</p>
        </Col>
      </Row>

      {action && (
        <Row>
          <Col s={10} offset="s1" className="action-col">
            {action}
          </Col>
        </Row>
      )}
    </div>
  );
}
