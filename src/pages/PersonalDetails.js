import React from 'react'
import { Container,  Grid, TextField, Button } from '@material-ui/core'
import GoogleMaps from './suggestion';





const PersonalDetails = ({ prevStep, nextStep }) => {
  
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
                 
               
              />
            </Grid>
            {/* last name */}
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Улица"
                label="Корпус строения"
      
             
              />
            </Grid>

            {/* country of residence */}
            

            {/* level of education */}
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Дом"
                label="Дом"
           
               
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Last Name"
                label="Почтовый индекс"
         
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Last Name"
                label="Квартира"
           
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Last Name"
                label="Улица"
             
                
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