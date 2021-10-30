
import Page from 'components/Page';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import React from 'react';
import { getColor } from 'utils/colors';
import { randomNum } from 'utils/demos';
import { useState, useEffect } from 'react';
import axios from 'axios';


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
const MONTHS1 = ['Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];


const genLineData = (moreData = {}) => {

  const[demande,setDemande]= useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:1112/RentabiliteJourTest')
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
        label: 'Nombre réel de livraisons',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: demande[3],
        ...moreData,
      },
    ],
  };
};
const genLineData1 = (moreData = {}) => {
  const[demande,setDemande]= useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:1112/RentabiliteJourTest')
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
          label: 'Nombre prévu de livraisons',
          backgroundColor: getColor('secondary'),
          borderColor: getColor('secondary'),
          borderWidth: 1,
          data: demande[4],
          ...moreData,
        },
      ],
    };
  };


const DemandePage = () => {
  return (
    <Page title="Demande" >

<Row>
  <Col></Col>
  <Col lg="5" md="6" sm="12" xs="12">
  <div className="d-flex justify-content-evenly " >
    <div className="pr-3 ">
    <UncontrolledButtonDropdown>
      <DropdownToggle caret>Selectionner axe t</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={event =>  window.location.href='/'}>Jour</DropdownItem>
          <DropdownItem>Mois</DropdownItem>
          <DropdownItem>Année</DropdownItem>
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
            <CardHeader>Demande réelle</CardHeader>
            <CardBody>
              <Line data={genLineData({ fill: false })} />
            </CardBody>
          </Card>
        </Col>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Demande prévue</CardHeader>
            <CardBody>
              <Line data={genLineData1({ fill: false })} />
            </CardBody>
          </Card>
        </Col>
     </Row>
     <Row>
       
     </Row>
    
    </Page>
  );
};

export default DemandePage;
