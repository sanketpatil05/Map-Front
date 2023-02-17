import React, { useEffect, useRef, useState } from "react";
import { Map, MapContainer, TileLayer } from "react-leaflet";
import osm from "./osm-providers";
import "leaflet/dist/leaflet.css";
import { useLocation, useParams } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import axios from "axios";

export default function SMap() {

    const location = useLocation();
const data = location.state;

   const {id}=useParams();
   
  const [center, setCenter] = useState({lat: data.lat, lng: data.lng});
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

 
//     function get(){
//  axios.get(`http://localhost:5000/city/${id}`).then((res)=>{
          
//         let data={lat:res.data.lat, lng:res.data.lng }
//         setCenter({...data})
//     })
//     .catch((er)=>{
//         console.log(er)
//     })
//     }

//     useEffect(()=>{
//         get()
//     },[])
   


  
   
  
    
  return (
      <>

          
              <Center >
                 
                   
                
                      <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} >
                          <TileLayer
                              url={osm.maptiler.url}
                              attribution={osm.maptiler.attribution}
                          />
                      </MapContainer>
                 
              </Center>
         
      </>
  );
}