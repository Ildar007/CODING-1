import {  Grid } from "@mui/material";
import * as React from "react";
import AutoComplete from "./avto";



import ButtonAppBar from './header'





// styles
const pageStyles = {
  color: "#232129",
   margin: "5rem auto",
   maxWidth: 220000,
}
const headingStyles = {
  marginTop: 40,
  marginBottom: 64,
  maxWidth: 320,
}



const IndexPage = () => {
  return ( <div>

  
    <ButtonAppBar/>
    <main style={pageStyles}>
      <title>дом</title>

    
      <Grid container>

        <Grid item xs= {12} md={4}>
        <h1 style={headingStyles}>
             Адрес Обьекта
          </h1>
        </Grid>
      
     <Grid item xs={12} md={6}>
     
      <AutoComplete
    placesKey="AIzaSyAR8phEVD88GQDnNy8xYBX6PpZTz2r67aI"
    inputId="address"
    setAddress={(addressObject) => console.log(addressObject)}
    required={true}
    /> 

     </Grid>
     
      </Grid>
     
    </main>
    </div>
  )
}

export default IndexPage
