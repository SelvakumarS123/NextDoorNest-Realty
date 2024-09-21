import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//MUI
import { Button, Typography, AppBar, Toolbar } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

//components
import Header from './Header';

//assets
import city from './Assets/city.jpg';

function Home() {
  return (
  <>
      <div style={{position:'relative'}}>
        <img style={{ width: '100%', height: '92vh' }} src={city} alt="City" />
        <div style={{ position: 'absolute', zIndex: 100, top: '100px', left: '20px', textAlign:'center' }}>
          <Typography variant='h2' style={{color:'white', fontWeight:'bolder'}}>
                FIND YOUR <span style={{color:'green'}}>NEXT PROPERTY</span> ON THE NDN-Realty WEBSITE
          </Typography>
          <Button sx={{fontSize:'2.5rem', borderRadius:'15px', backgroundColor:'green', marginTop:'2rem', boxShadow:'3px 3px 3px white',}} variant='contained'>See all properties</Button>
        </div>
      </div>
  </>
  );
}
// style={{ backgroundColor: "black" }}
export default Home