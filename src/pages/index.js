import { Grid } from "@mui/material";
import * as React from "react";
import ButtonAppBar from './header'
import Signup from "./singup";


// styles
const pageStyles = {
  color: "#232129",
   
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 40,
  marginBottom: 64,
  maxWidth: 320,
}



const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>дом</title>

      <ButtonAppBar/>
      <Grid container>

        <Grid item xs= {12} md={4}>
        <h1 style={headingStyles}>
             Адрес Обьекта
          </h1>
        </Grid>
      
     <Grid iteb xs={12} md={4}>
     <Signup/>
     </Grid>
    
      </Grid>

    </main>
  )
}

export default IndexPage
