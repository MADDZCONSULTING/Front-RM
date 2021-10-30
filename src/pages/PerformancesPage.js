
import Page from 'components/Page';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import React from 'react';
import { getColor } from 'utils/colors';
import { randomNum } from 'utils/demos';
import { useState, useEffect } from 'react';
import axios from 'axios';


import { Line ,Pie} from 'react-chartjs-2';
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
  ButtonGroup,
  DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown 
} from 'reactstrap';
import CardFooter from 'reactstrap/lib/CardFooter';



const MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'];
const MONTHS1 = ['Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];


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
    labels: demande[0],
    datasets: [
      {
        label: 'Bon ',
        backgroundColor: getColor('primary'),
        borderColor: getColor('primary'),
        borderWidth: 1,
        data: demande[5],
        ...moreData,
      },
      {
        label: 'Moyen',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: demande[6],
        ...moreData,
      },
      {
        label: 'Mauvais',
        backgroundColor: getColor('info'),
        borderColor: getColor('info'),
        borderWidth: 1,
        data:demande[7],
        ...moreData,
      },
    ],
  };
};

  const genPieData = () => {
    return {
      datasets: [
        {
          data: [252, 437, 19],
          backgroundColor: [
            getColor('primary'),
            getColor('secondary'),
            getColor('info'),
          
          ],
          label: 'Dataset 1',
        },
      ],
      labels: ['Bon', 'Moyen', 'Mauvais'],
    };
  };

  
const PerformancesPage = () => {
 
  return (
  
    <Page title="Performances livreurs" >
<Row>
      <Col></Col>
  <Col xl={4} lg={12} md={12}>
    
  <div className="d-flex justify-content-center" >
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
    </div></Col>

      </Row>

     <Row>
 
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Evolution réelle des catégories </CardHeader>
            <CardBody>
              <Line data={genLineData({ fill: false })} />
              
            </CardBody>
          </Card>
        </Col>
        
        
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Pourcentage réel des catégories </CardHeader>
            <CardBody>
              <Pie data={genPieData()} />
            </CardBody>
          </Card>
        </Col>

     </Row>
 
    
    </Page>
  );
};

export default PerformancesPage;
