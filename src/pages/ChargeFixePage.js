import AuthForm, { STATE_LOGIN } from 'components/ChargeFixe';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';
import ChargeFixe from '../components/ChargeFixe';

class ChargeFixePage extends React.Component {

  render() {
    return (
      <Row
        style={{
          
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={4}>
          <Card body>
            <ChargeFixe
              
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ChargeFixePage;
