import { styles } from "../App.css";
import { useEffect, useState } from "react";
import * as React from 'react';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Gallery({ handleBack }) {

  const [listOfImages1, setListOfImages1] = useState([]);

  // function newSetOfImages() {
    
    async function getListOfImages() {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=1&order=RAND&api_key=live_xk5drGUVlpeseTf0jZADevyOGuh2uwvB9FcPYDr6KdTgxVgFnjzgzPqMtT4jVEGU");
      const data = await response.json();
      setListOfImages1(data);
      console.log(listOfImages1);    
    }
    async function getListOfImages1() {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=3&order=RAND&api_key=live_xk5drGUVlpeseTf0jZADevyOGuh2uwvB9FcPYDr6KdTgxVgFnjzgzPqMtT4jVEGU");
      const data = await response.json();
      setListOfImages1(data);
      console.log(listOfImages1);    
    }
    
  //   useEffect(() => {
  //     getListOfImages2();
  //   }, []);
  // }
// --------------------------------------------------------------------------------------------------

  // const [listOfImages, setListOfImages] = useState([]);
  
  
  async function getListOfImages2() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=20&order=RAND&api_key=live_xk5drGUVlpeseTf0jZADevyOGuh2uwvB9FcPYDr6KdTgxVgFnjzgzPqMtT4jVEGU");
    const data = await response.json();
    setListOfImages1(data);
    console.log(listOfImages1);    
  }

  async function getListOfImages3() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=abys&api_key=live_xk5drGUVlpeseTf0jZADevyOGuh2uwvB9FcPYDr6KdTgxVgFnjzgzPqMtT4jVEGU");
    const data = await response.json();
    setListOfImages1(data);
    console.log(listOfImages1);    
  }
  async function getListOfImages4() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=4  &breed_ids=aege&api_key=live_xk5drGUVlpeseTf0jZADevyOGuh2uwvB9FcPYDr6KdTgxVgFnjzgzPqMtT4jVEGU");
    const data = await response.json();
    setListOfImages1(data);
    console.log(listOfImages1);    
  }

  // useEffect(() => {
  //   getListOfImages();
  // }, []);
  function openFullscreen() {
    document.getElementById('image')?.requestFullscreen()
  }
  
  return (
    <main>
      <style>
        
      </style>
      {/* <header>{ 'x-api-key' : "live_xk5drGUVlpeseTf0jZADevyOGuh2uwvB9FcPYDr6KdTgxVgFnjzgzPqMtT4jVEGU" }</header> */}
      <h1>image gallary</h1>
      {/* <div onClick={handleBack} style={styles.link}>
        Back to home
      </div> */}
      <div>
        <Button variant="outlined" onClick={getListOfImages}>cat</Button>
        <Button variant="outlined" onClick={getListOfImages1}>cats</Button>
        <Button variant="outlined" onClick={getListOfImages2}>more cats</Button>
        <Button variant="outlined" onClick={getListOfImages3}>cat breeds</Button>
        <Button variant="outlined" onClick={getListOfImages4}>cat breed a</Button>
      </div>
      <div className="maincontent">
      <div id="grid" className="imgrid"></div>
      </div>
      {/* {listOfImages.map(catData => <img key={catData.id} src={catData.url} height={catData.height} width={catData.width} />)} */}
      {listOfImages1.map(catData => <img key={catData.id} src={catData.url} height={catData.height} width={catData.width} onClick={openFullscreen} />) }
      
      <img src="https://25.media.tumblr.com/tumblr_maklk6AJiw1qhwmnpo1_400.jpg" height={500} width={800} />
    </main>
  );
}