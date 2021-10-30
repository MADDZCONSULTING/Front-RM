
import Page from 'components/Page';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import React from 'react';
import { getColor } from 'utils/colors';
import { randomNum } from 'utils/demos';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Table,
  DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown 


} from 'reactstrap';



const MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'];

const genLineData = (moreData = {}) => {
  const[demande,setDemande]= useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:1112/RentabiliteMoisTest')
  .then( (response)=> {
    setDemande(response.data.data);
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
},[])
  return {
    labels:demande[0],
    datasets: [
      {
        label: 'Rentabililté réelle',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: demande[1],
        ...moreData,
      },
    ],
  };
};
const genLineData1 = (moreData = {}) => {
  const[demande,setDemande]= useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:1112/RentabiliteMoisTest')
  .then( (response)=> {
    setDemande(response.data.data);
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
},[])
    return {
      labels: demande[0],
      datasets: [
        {
          label: 'Comission proposé',
          backgroundColor: getColor('secondary'),
          borderColor: getColor('secondary'),
          borderWidth: 1,
          data:demande[2],
          ...moreData,
        },
      ],
    };
  };


const RentabilitePage = () => {
  return (
    <Page title="Rentabilité/Prix" >  
<Row>
  <Col></Col>
  <Col lg="5" md="6" sm="12" xs="12">
  <div className="d-flex justify-content-evenly " >
    <div className="pr-3 ">
    <UncontrolledButtonDropdown>
      <DropdownToggle caret>Selectionner axe t</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={event =>  window.location.href='/RentabiliteJour'}>Jour</DropdownItem>
          <DropdownItem onClick={event =>  window.location.href='/Rentabilite'}>Mois</DropdownItem>
          <DropdownItem onClick={event =>  window.location.href='/RentabiliteAnnee'}>Année</DropdownItem>
        </DropdownMenu>
    </UncontrolledButtonDropdown>
    </div>
    <UncontrolledButtonDropdown>
      <DropdownToggle caret> Selectionner hub</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Hub Alager</DropdownItem>
          <DropdownItem>Hub Oran</DropdownItem>
          <DropdownItem>Hub Télemcen</DropdownItem>
          <DropdownItem>Hub Sétif</DropdownItem>
          <DropdownItem>Hub Annaba</DropdownItem>
        </DropdownMenu>
    </UncontrolledButtonDropdown>
    </div>
   </Col>
              
</Row>

      
     <Row>
    
 
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Evolution réelle de la rentabilité</CardHeader>
            <CardBody>
              <Line data={genLineData({ fill: false })} />
            </CardBody>
          </Card>
        </Col>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Evolution réelle des comissions</CardHeader>
            <CardBody>
              <Line data={genLineData1({ fill: false })} />
            </CardBody>
          </Card>
        </Col>
     </Row>
    
    </Page>
  );
};

export default RentabilitePage;
