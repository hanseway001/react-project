import '../index.css';
import { useEffect, useState } from "react";
import * as React from 'react';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { auto } from "@popperjs/core";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// export default function BasicModal() {
 
// }
export default function Gallery({ handleBack }) {

  const [listOfImages1, setListOfImages1] = useState([]);
  const [modalImage, setModalImage] = useState();

  console.log({listOfImages1} + " this is my list");

  // function change1() {
  //   listOfImages1.height="500"; //Your desired Height
  //   listOfImages1.width="219"; //Your desired Width
  // }
  // function newSetOfImages() {
    
    async function getListOfImages() {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=1&order=RAND&api_key=live_xk5drGUVlpeseTf0jZADevyOGuh2uwvB9FcPYDr6KdTgxVgFnjzgzPqMtT4jVEGU");
      const data = await response.json();
      setListOfImages1(data);
      // console.log(listOfImages1);    
    }
    async function getListOfImages1() {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=3&order=RAND&api_key=live_xk5drGUVlpeseTf0jZADevyOGuh2uwvB9FcPYDr6KdTgxVgFnjzgzPqMtT4jVEGU");
      const data = await response.json();
      setListOfImages1(data);
      console.log(listOfImages1);    
    }
    
  async function getListOfImages2() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=21&order=RAND&api_key=live_xk5drGUVlpeseTf0jZADevyOGuh2uwvB9FcPYDr6KdTgxVgFnjzgzPqMtT4jVEGU");
    const data = await response.json();
    setListOfImages1(data);
    console.log(listOfImages1);    
  }

  async function getListOfImages3() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=abys&api_key=live_xk5drGUVlpeseTf0jZADevyOGuh2uwvB9FcPYDr6KdTgxVgFnjzgzPqMtT4jVEGU");
    const data = await response.json();
    setListOfImages1(data);
    console.log(listOfImages1);    
  }
  async function getListOfImages4() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=aege&api_key=live_xk5drGUVlpeseTf0jZADevyOGuh2uwvB9FcPYDr6KdTgxVgFnjzgzPqMtT4jVEGU");
    const data = await response.json();
    setListOfImages1(data);
    console.log(listOfImages1);    
  }

  function modalSetState(url) {
    setModalImage(url);
    handleOpen();
    // console.log(listOfImages1);    
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  //   getListOfImages();
  // }, []);
  
  
  return (
    
    <main>
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
        {/* {listOfImages1.map(catData => <img key={catData.id} src={catData.url} height={auto} width={400} />) } */}
        <img src={modalImage} height={auto} width={400} />

          <Typography id="modal-modal-title" variant="h6" component="h2">
            This is a cat
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          </Typography>
        </Box>
      </Modal>
    </div>
      <style>
        
      </style>
      {/* <header>{ 'x-api-key' : "live_xk5drGUVlpeseTf0jZADevyOGuh2uwvB9FcPYDr6KdTgxVgFnjzgzPqMtT4jVEGU" }</header> */}
      <h1>Image Gallary</h1>
      {/* <div onClick={handleBack} style={styles.link}>
        Back to home
      </div> */}
      <div className='buttonContainer'>
        <Button className='buttonStyle' variant="outlined" onClick={getListOfImages}>cat</Button>
        <Button className='buttonStyle' variant="outlined" onClick={getListOfImages1}>cats</Button>
        <Button className='buttonStyle' variant="outlined" onClick={getListOfImages2}>more cats</Button>
        <Button className='buttonStyle' variant="outlined" onClick={getListOfImages3}>abyssinian (20)</Button>
        <Button className='buttonStyle' variant="outlined" onClick={getListOfImages4}> aegean (5)</Button>
      </div>
      <div className="maincontent">
      <div id="grid" className="imgrid"></div>
        {listOfImages1.map(catData => <img key={catData.id} src={catData.url} height={auto} width={400} onClick={() => modalSetState(catData.url)}/>) }
      </div>
      {/* {listOfImages.map(catData => <img key={catData.id} src={catData.url} height={catData.height} width={catData.width} />)} */}
      {/* <img src="https://25.media.tumblr.com/tumblr_maklk6AJiw1qhwmnpo1_400.jpg" height={500} width={800} /> */}
    </main>
    
  );
}
