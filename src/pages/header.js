import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';






export default function ButtonAppBar() {
    
 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='default'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="arrow"
            sx={{ mr: 2 }}
          >
              <Typography variant="h6" color="primary" component="div" sx={{ flexGrow: 1 }}>
            Страховка ➜
          </Typography>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Оплата
          </Typography>
          <Typography variant="h4" component="div" sx={{ flexGrow: 0 }}>
               55₽
          </Typography>
          <Button
           type="submit"
           
           to='/success' target='_blank'
           variant="contained"
           color="primary"
          > 
           Далее
           </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
