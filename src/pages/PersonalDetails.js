import React from 'react'
import { Container,  Grid, TextField, Button } from '@material-ui/core'
import GoogleMaps from './suggestion';

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }
  
  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

 

  return (
    <Container  component="main" maxWidth="xs">
      <div>
         
        <form>
          <Grid container spacing={3}>

            {/* first name */}
            <Grid item xs={12}>
               
            
            </Grid>
            <Grid item xs={12}>
                <GoogleMaps/>
            
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Населенный пункт"
                label="Населенный пункт"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
              />
            </Grid>
            {/* last name */}
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Улица"
                label="Корпус строения"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
              />
            </Grid>

            {/* country of residence */}
            

            {/* level of education */}
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Дом"
                label="Дом"
                onChange={handleChange('username')}
                defaultValue={values.username}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Last Name"
                label="Почтовый индекс"
                onChange={handleChange('index')}
                defaultValue={values.index}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Last Name"
                label="Квартира"
                onChange={handleChange('punkt')}
                defaultValue={values.punkt}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Last Name"
                label="Улица"
                onChange={handleChange('street')}
                defaultValue={values.street}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Previous }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                назад
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Continue }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                далее
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default PersonalDetails