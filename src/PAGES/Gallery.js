import { styles } from "./Home";
import { useEffect, useState } from "react";

export default function Gallery({ handleBack }) {

  const [listOfImages, setListOfImages] = useState([]);

  async function getListOfImages() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?format=json&limit=10");
    const data = await response.json();
    setListOfImages(data);
    console.log(listOfImages);    
  }

  useEffect(() => {
    getListOfImages();
  }, []);
  
  return (
    <main>
      <h1>image gallary</h1>
      {/* <div onClick={handleBack} style={styles.link}>
        Back to home
      </div> */}
      <h3>food and drink</h3>
      <h3></h3>
      <h3></h3>
      <img src="https://i.imgur.com/VzCQCF1.png" height={500} width={800} />
      <img src="https://25.media.tumblr.com/tumblr_maklk6AJiw1qhwmnpo1_400.jpg" height={500} width={800} />
    </main>
  );
}