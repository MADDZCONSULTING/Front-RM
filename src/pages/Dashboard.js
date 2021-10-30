import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget,DataWidget } from 'components/Widget';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  MdBubbleChart,
  MdInsertChart,
  MdPersonPin,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown 

} from 'reactstrap';
import { getColor } from 'utils/colors';
import { randomNum } from 'utils/demos';

const MONTHS =['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'];
const MONTHS1 = ['Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

const genLineData = (moreData = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'Rentabililté réelle',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          25000,
          30990,
          34090,
          35670,
          35900,
          40098,
          45000,
        ],
        ...moreData,
      },
    ],
  };
};
const genLineData1 = (moreData = {}) => {
  return {
    labels: MONTHS1,
    datasets: [
      {
        label: 'Nombre prévu de livraisons',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
         5609,
         5040,
         5800,
         6709,
         6890,
         6908,
         8001,
        ],
        ...moreData,
      },
    ],
  };
};

class Dashboard extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="Dashboard"
        title="Dashboard"
        >
            <Row>
      <Col></Col>
  <Col lg="4" md="12" sm="12" xs="12">
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
   
    </div>
   </Col>
      </Row>
    
<Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <DataWidget
              title="Commission livreur"
              data1={{
                value1: '+0,2',
                label1: 'Bon',
              }}
              data2={{
                value2: '+0,1',
                label2: 'Moyen',
              }}
              data3={{
                value3: '-0,15' ,
                label3: 'Mauvais',
              }}
            />
          </Col>
          <Col lg={3} md={6} sm={6} xs={12}>
            <DataWidget
              title="Performances"
              data1={{
                value1: '0,8',
                label1: 'Taux de livraison',
              }}
              data2={{
                value2: '5h',
                label2: 'Retard ',
              }}
              data3={{
                value3: '0,2',
                label3: "Taux d'amélioration"
              }}
            />
          </Col>
          <Col lg={3} md={6} sm={6} xs={12}>
            <DataWidget
              title="Tournées"
              data1={{
                value1: 12,
                label1: 'Total',
              }}
              data2={{
                value2: 10,
                label2: 'Rentables',
              }}
              data3={{
                value3: 2,
                label3: 'Non rentables',
              }}
            />
          </Col>
        
          <Col lg={3} md={6} sm={6} xs={12}>
            <DataWidget
              title="Demande"
              data1={{
                value1: 228,
                label1: 'Standard',
              }}
              data2={{
                value2: 35,
                label2: 'Express',
              }}
              data3={{
                value3: 54,
                label3: 'Food',
              }}
            />
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
            <CardHeader>Demande prévue</CardHeader>
            <CardBody>
              <Line data={genLineData1({ fill: false })} />
            </CardBody>
          </Card>
        </Col>
 </Row>
         
      </Page>
    );
  }
}
export default Dashboard;
