import React from 'react';
import { Row, Col, Icon } from 'react-materialize';
import '../../styles/components/landing/_card.scss';

export default function Card(props) {
  const {
    title, 
    description, 
    action, 
    descriptionStyle,
    iconType,
   } = props;

  return (
    <div className="card-container">
      <Row>
        <Col s={10} offset="s1">
          <h4 className="center-align">{title}</h4>
        </Col>
        <Col s={10} offset="s1" className="center-align">
          <div className="icon-wrapper">
            <Icon small>{iconType}</Icon>
          </div>
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
