import React,{useState} from 'react'
//leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
//MUI
import { Button, Typography, AppBar, Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid2';
// Map icons
import houseIconPng from "./Assets/Mapicons/house.png";
import apartmentIconPng from "./Assets/Mapicons/apartment.png";
import officeIconPng from "./Assets/Mapicons/office.png";
//Assets
import img1 from "./Assets/img1.jpg";
import myListings from "./Assets/Data/Dummydata";

function Listings() {
 // const navigate = useNavigate();
	const houseIcon = new Icon({
		iconUrl: houseIconPng,
		iconSize: [40, 40],
	});

	const apartmentIcon = new Icon({
		iconUrl: apartmentIconPng,
		iconSize: [40, 40],
	});

	const officeIcon = new Icon({
		iconUrl: officeIconPng,
		iconSize: [40, 40],
	});
  const [latitude, setLatitude] = useState(10.549321138198273);
	const [longitude, setLongitude] = useState(77.77617036973302);
  function GoEast() {
		setLatitude(10.543583547144538);
		setLongitude(77.76839681674443);
	}
  function GoCenter() {
		setLatitude(10.549321138198273);
		setLongitude(77.77617036973302);
	}
  return (
    <Grid container>
      <Grid item size={4}>
        <Button onClick={GoEast}>GoEast</Button>
        <Button onClick={GoCenter}>GoCenter</Button>
      </Grid>
      <Grid item size={8}>
        <AppBar position='sticky'>
        <div style={{height:'100vh'}}>
          <MapContainer center={[10.549321138198273, 77.77617036973302]} zoom={14} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker icon={houseIcon} position={[latitude, longitude]}>
                <Popup>
                  <Typography variant='h5'>Title</Typography>
                  <img src={img1} style={{height:'14rem', width:'18rem'}}/>
                  <Typography variant='body1'> Some text below</Typography>
                  <Button variant='contained' fullWidth>Link</Button>
                </Popup>
              </Marker>
          </MapContainer>
        </div>
        </AppBar>
      </Grid>
    </Grid>
    
  )
}

export default Listings