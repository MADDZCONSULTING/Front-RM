import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import ChargeFixePage from 'pages/ChargeFixePage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

const TourneesPage = React.lazy(() => import('pages/TourneesPage'));
const RentabilitePage = React.lazy(() => import('pages/RentabilitePage'));
const RentabiliteJourPage = React.lazy(() => import('pages/RentabiliteJour'));
const RentabiliteAnneePage = React.lazy(() => import('pages/RentabiliteAnne'));
const DemandePage = React.lazy(() => import('pages/DemandePage'));
const DemandeJourPage = React.lazy(() => import('pages/DemandeJour'));
const PerformancesPage = React.lazy(() => import('pages/PerformancesPage'));
const Dashboard = React.lazy(() => import('pages/Dashboard'));



const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/ChargeFixe"
              layout={EmptyLayout}
              component={props => (
                <ChargeFixePage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />
             
            <MainLayout breakpoint={this.props.breakpoint}>

              <React.Suspense fallback={<PageSpinner />}>
                
                <Route exact path="/Tournees" component={TourneesPage} />
                <Route exact path="/Dashboard" component={Dashboard} />
                <Route exact path="/Rentabilite" component={RentabilitePage} />
                <Route exact path="/RentabiliteJour" component={RentabiliteJourPage} />
                <Route exact path="/RentabiliteAnnee" component={RentabiliteAnneePage} />
                <Route exact path="/Demande" component={DemandePage} />
                <Route exact path="/DemandeJour" component={DemandeJourPage} />
            
                <Route exact path="/Performances" component={PerformancesPage} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
