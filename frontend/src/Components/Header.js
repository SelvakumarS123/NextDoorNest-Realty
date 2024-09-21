import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Typography, AppBar, Toolbar } from '@mui/material';

function Header() {
    const navigate = useNavigate();
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "black" }}>
            <Toolbar>
            <div style={{marginRight:"auto"}}><Button color="inherit" onClick={()=>navigate("/")}><Typography variant='h4'>NDN</Typography></Button></div>
            <div>
                <Button color="inherit" style={{ marginRight: "2rem" }} onClick={()=>navigate("/listings")}>Listings</Button>
                <Button color="inherit" style={{ marginLeft: "2rem" }} onClick={()=>navigate("/")}>Agencies</Button>
            </div>
            <div style={{marginLeft:"auto", marginRight:"6rem"}}>
                <Button sx={{
                backgroundColor: 'green',
                color: 'white',
                fontSize: '1.1rem',
                width: '15rem',
                marginLeft: '1rem',
                boxShadow:'3px 3px 3px white',
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
                boxShadow:'3px 3px 3px green',
                transition: 'background-color 0.3s',
                '&:hover': {
                    backgroundColor: 'green',
                },
                }} onClick={()=>navigate("/login")}>Login
                </Button>
            </div>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Header