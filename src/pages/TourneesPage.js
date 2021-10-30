
import React from 'react';
import Page from 'components/Page';
import { getColor } from 'utils/colors';
import { Line ,Pie} from 'react-chartjs-2';
import { Card,CardBody,CardHeader, Col, Row,Button,Modal } from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import schema from 'data/schema.json';
import Table from 'components/Table'; 

 
// data for the pie chart
const genPieData = () => {
  const[tournees,setTournees]= useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:1112/rentabilite ')
  .then( (response)=> {
    setTournees(response.data.data);
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
    
  },[])
  return {
    datasets: [
      {
        data: [tournees[1],tournees[2] ],
        backgroundColor: [
          getColor('secondary'),
         
          getColor('info'),
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['Tournées rentables', 'Tournées non rentables'],
  };
};
 ///modal link

 
 const TourneesPage =()=>{

//calling APIs

const[tournees,setTournees]= useState([])

useEffect(() => {
  axios.get('http://127.0.0.1:1112/rentabilite ')
.then( (response)=> {
  setTournees(response.data.data);
}).catch(function (error) {
  console.log(error);
});
  
},[])
 let [bouton,setBouton]= useState(false)
  useEffect(() => {
    if(bouton){
    axios.get('http://127.0.0.1:1112/simulation')
  .then( (response)=> {
    console.log(response);
    setBouton(false)
  }).catch(function (error) {
    console.log(error);
  });}
  },[bouton])


  return (

    <Page title="Tournées" >
      <Row>
  <Col></Col>
  <Col lg="5" md="6" sm="12" xs="12">
  <div className="d-flex justify-content-evenly " >
    <div className="pr-3 ">

  <Button onClick={() => setBouton(true)}>Simulation</Button>
    </div>
    <Button onClick={event =>  window.location.href='/ChargeFixe'}>Modifier charge fixe </Button>
   
    </div>
   </Col>
              
</Row>
      
      <Row>
         <Col xl={6} lg={12} md={12}>
           <CardHeader> Rentabilité prévue des tournées "pending"</CardHeader>
              <Card body>
                    <Table headers={Object.keys(schema)} rows={tournees[0]} />
              </Card>
          </Col>
          <Col xl={6} lg={12} md={6}>
           <Card>
             <CardHeader>Vue globale de la rentabilité</CardHeader>
             <CardBody>
              <Pie data={genPieData()} />
              </CardBody>
            </Card>
           </Col>
      </Row>

  </Page>
  );
};

export default TourneesPage
