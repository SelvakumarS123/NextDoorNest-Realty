import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, AppBar, Toolbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

function Home() {
  return (
  <>
    <CssBaseline />
    <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <div style={{marginRight:"auto"}}><Button color="inherit"><Typography variant='h4'>NDN</Typography></Button></div>
          <div>
            <Button color="inherit" style={{ marginRight: "2rem" }}>Listings</Button>
            <Button color="inherit" style={{ marginLeft: "2rem" }}>Agencies</Button>
          </div>
          <div style={{marginLeft:"auto", marginRight:"6rem"}}>
            <Button sx={{
              backgroundColor: 'green',
              color: 'white',
              fontSize: '1.1rem',
              width: '15rem',
              marginLeft: '1rem',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: 'blue',
              },
              }}>Add Property
            </Button>

            <Button sx={{
              backgroundColor: 'white',
              color: 'black',
              fontSize: '1.1rem',
              width: '15rem',
              marginLeft: '1rem',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: 'green',
              },
              }}>Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
  </>
  );
}
// style={{ backgroundColor: "black" }}
export default Home