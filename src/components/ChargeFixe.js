import React from 'react';
import { Button, Form, FormGroup, Input, Label,Col } from 'reactstrap';


function Greeting(props) {
  const error = props.error;
  if (error) {
    return <Label>La valeur est incorrecte</Label>;
  }
  return <Label></Label>;
}
class ChargeFixe
extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state= {error:false}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    return  this.setState({value: event.target.value});
  }

  render() {
    const {
      
      children,
     
    } = this.props;
    let val=this.state.value;
    if(val>0 && val<20000 ){this.state.error=false}
    else{this.state.error=true}

    return (
        
        <Form >
        <div  class="text-center mr-2">
        <FormGroup >
          <Label size="lg">Charge fixe par défaut du mois:</Label>
          <Label  size="lg">15000 DA</Label>
          <Label size="lg" >Nouvelle charge fixe du mois prochain</Label>
          <Input size="md"  class="align-middle" value={this.state.value} onChange={this.handleChange} />
          <Greeting error={this.state.error}></Greeting>
        </FormGroup>
        <Button
         size="md"
         onClick={event =>  window.location.href='/Tournees'}
          >
         Annuler
        </Button>
        <Label>-</Label>
        <Button
        class="  ml-2"
        size="md"
          onClick={event =>  window.location.href='/Tournees'}
         >
         Enregistrer
        </Button >
        </div>
        {children}
      </Form>
    );
  }
}


export default ChargeFixe;
