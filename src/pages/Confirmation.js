import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Button } from '@material-ui/core'

const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
  const { firstName, lastName, email, username, country, index, street, punkt } = values
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
        <List>
          <ListItem>
            <ListItemText primary="Дом" secondary={email}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Корпус строения" secondary={username}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Населенный пункт" secondary={firstName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Улица" secondary={lastName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Адрес" secondary={country}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Почтовый индекс" secondary={street}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Корпус строения" secondary={punkt}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Квартира" secondary={index}/>
          </ListItem>
        </List>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button 
              onClick={ Previous }
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Previous
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
              Confirm & Continue
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Confirmation
