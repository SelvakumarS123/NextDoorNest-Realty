import React, { useState, useEffect } from 'react';
// Leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline, Polygon } from 'react-leaflet';
import { CircleMarker, Icon } from "leaflet";
// MUI
import { Button, Typography, AppBar, Toolbar, Card, CardHeader, CardMedia, CardContent, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';
// Map icons
import houseIconPng from "./Assets/Mapicons/house.png";
import apartmentIconPng from "./Assets/Mapicons/apartment.png";
import officeIconPng from "./Assets/Mapicons/office.png";
// Assets
import img1 from "./Assets/img1.jpg";
import myListings from "./Assets/Data/Dummydata"; //to be removed
//Axios
import Axios from 'axios';

function Listings() {
  //fetch('http://127.0.0.1:8000/api/listings/').then(response => response.json()).then(data=>console.log(data)) //take the response and transform it into json format
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

  const [latitude, setLatitude] = useState(51.48740865233002);
  const [longitude, setLongitude] = useState(-0.12667052265135625);

  	
  // function GoEast() {
        //         setLatitude(51.46567014039476);
        //         setLongitude(0.2596173538795676);
        // }
  // function GoCenter() {
        //         setLatitude(51.48740865233002);
        //         setLongitude(-0.12667052265135625);
        // }

  const polyOne = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];

  const polygonOne = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ];

  const [allListings, setAllListings] = useState([]);
	const [dataIsLoading, setDataIsLoading] = useState(true);

  useEffect(() => {
		const source = Axios.CancelToken.source();
		async function GetAllListings() {
      try{
        const response = await Axios.get("http://127.0.0.1:8000/api/listings/",
				{ cancelToken: source.token });
        // console.log(response.data);
        setAllListings(response.data);
        setDataIsLoading(false);
      }catch(error){
        console.log(error.response);
      }
		}
		GetAllListings();
    return () => {
			source.cancel();
		};
	}, []);

  if(dataIsLoading===false){
    console.log(allListings[0].location);
  }

  if(dataIsLoading===true){
    return (
      <Grid container justifyContent="center" alignItems="center" style={{height:'100vh'}}>
        <CircularProgress />
      </Grid>
    )
  }

  // Function to determine the icon based on listing type
  function IconDisplay(listing) {
    if (listing.listing_type === 'House') {
      return houseIcon;
    } else if (listing.listing_type === 'Apartment') {
      return apartmentIcon;
    } else if (listing.listing_type === 'Office') {
      return officeIcon;
    }
    return null; // Fallback if none match
  }

  return (
    <Grid container>
      <Grid item size={4}>
        {allListings.map((listing) => {
          return (
            <Card sx={{
              margin: '0.5rem',
              border: '1px solid black',
              position: 'relative',
            }} key={listing.id}>
              <CardHeader
                  // action={
                  //   <IconButton aria-label="settings">
                  //     <MoreVertIcon />
                  //   </IconButton>
                  // }
                title={listing.title}
                subheader="September 14, 2016"
              />
              <CardMedia sx={{
                paddingRight: '1rem',
                paddingLeft: '1rem',
                height: '20rem',
                width: '30rem',
              }}
                component="img"
                image={listing.picture1}
                alt={listing.title}
              />
              <CardContent>
                <Typography variant="body2">
                  {listing.description.substring(0, 200)}...
                </Typography>
              </CardContent>
              {listing.property_status === "Sale" ? (
                  <Typography sx={{position:'absolute',backgroundColor:'green', zIndex:'1000', color:'white', top:'100px', left:'20px', padding:'5px'}}>
                    {listing.listing_type}{" "}
                    ${listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                ) : (
                  <Typography sx={{position:'absolute',backgroundColor:'green', zIndex:'1000', color:'white', top:'100px', left:'20px', padding:'5px'}}>
                    {listing.listing_type}{" "}
                    ${listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}/{" "}{listing.rental_frequency}</Typography>)
                }
                {/* <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions> */}
            </Card>
          );
        })}
      </Grid>
      <Grid item size={8} style={{ marginTop: '0.5rem' }}>
        <AppBar position='sticky'>
          <Toolbar>
          </Toolbar>

          <div style={{ height: '100vh' }}>
            <MapContainer center={[latitude, longitude]} zoom={14} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Polyline positions={polyOne} weight={5} color='green' />
              <Polygon positions={polygonOne} color='yellow' fillColor='blue' fillOpacity={0.7} opacity={0}/>
              {allListings.map((listing) => {
                return (
                  <Marker
                    key={listing.id}
                    icon={IconDisplay(listing)}
                    position={[listing.location.coordinates[0], listing.location.coordinates[1]]}
                  >
                    <Popup>
                      <Typography variant='h5'>{listing.title}</Typography>
                      <img src={listing.picture1} style={{ height: '14rem', width: '19rem' }} alt={listing.title} />
                      <Typography variant='body1'>{listing.description.substring(0, 150)}...</Typography>
                      <Button variant='contained' fullWidth>Details</Button>
                    </Popup>
                  </Marker>
                );
              })}
              <Marker icon={houseIcon} position={[latitude, longitude]}>
                <Popup>
                  <Typography variant='h5'>Title</Typography>
                  <img src={img1} style={{ height: '14rem', width: '18rem' }} alt="Some description" />
                  <Typography variant='body1'>Some text below</Typography>
                  <Button variant='contained' fullWidth>Link</Button>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default Listings;

//sk
