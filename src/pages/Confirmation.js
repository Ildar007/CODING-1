import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Button } from '@material-ui/core'

const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
 
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
            <ListItemText primary="дом" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Населенный пункт" />
          </ListItem>
          <ListItem>
            <ListItemText primary="квартира" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Адрес" />
          </ListItem>
          <ListItem>
            <ListItemText primary="улица" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Корпус строения" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Почтовый индекс"/>
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
