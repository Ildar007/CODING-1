import React, { Component } from 'react'
import PersonalDetails from './PersonalDetails'
import Confirmation from './Confirmation'
import Success from './Succes'



export default class Signup extends Component {

  state = {
    step: 1,
    firstName: '',
    username: '', 
    password: '', 
   
    lastName: '',
    country: '',
    index: '',
    street: '',
    punkt: ''
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const {  username, password, firstName, lastName, country, index,  street, punkt } = this.state;
    const values = {  username, password, firstName, lastName, country, index, street, punkt }
    
    switch(step) {
      case 1: 
        return (
            <PersonalDetails 
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 2: 
        return (
            <Confirmation 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            values={ values }
          />
        )
      case 3: 
          return (
            <Success />
          )
      default: 
          // do nothing
    }
  }
}
