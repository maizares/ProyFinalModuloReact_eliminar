import { useState, useEffect, useMemo, useCallback } from "react";
import Logo from "./components/Logo/Logo";
import SearchByDate from "./components/SearchPicture/SearchByDate";
import PictureDetail from "./components/PictureInfo/PictureInfo";
import PictureList from "./components/PictureList/PictureList";
import { PictureAPI } from "./api/picture-nasa";
import logo from "./assets/images/logonasa.png"; 
import s from "./style.module.css";

function App() {
  const [currentPicture, setcurrentPicture] = useState();
  const [lastFivePictures, setLastPictures] = useState([]);
  
  let date        = new Date();
  date.setDate(date.getDate())
  let dateStart   = date.getFullYear() + '-' +(date.getMonth() + 1) + '-' + date.getDate(); 
  /*
  async function pictureInitial(dateStart) {
    const result = await PictureAPI.pictureInitial(dateStart);
    if (result.length > 0) {
      setcurrentPicture(result[0]);
    }
  }*/
  const pictureInitial = useCallback(async () => {
    const result = await PictureAPI.pictureInitial(dateStart);
    if (result.length > 0) {
      setcurrentPicture(result[0]);
    }
  },[currentPicture]);

  async function searchByDate(date) {
    const result = await PictureAPI.searchByDate(date);
    setcurrentPicture(result[0]);
    lastPictures(date); 
  }
/*
  async function lastPictures(date) {
    const result = await PictureAPI.lastPictures(date);
    setLastPictures(result.slice(0, 10));
  }
*/
const lastPictures = useCallback(async () => {
  const result = await PictureAPI.lastPictures(date);
    setLastPictures(result);
},[lastFivePictures]);

  function updatecurrentPicture(date) {
    setcurrentPicture(date); 
  }

  useEffect(() => {     
    pictureInitial(dateStart);
  }, []);
 
  useEffect(() => {    
    lastPictures(dateStart);    
  }, []);

  //console.log(currentPicture);

  return (
    <div
      className={s.main}
      
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-2">
            <a href="index.html"><Logo image={logo} /></a>            
          </div>
          <div className="col-8" >
            <h1 className={s.title}>Buscar imagenes de la Nasa por fecha</h1>
          </div>          
          <div className="col-2">
            <SearchByDate onSubmit={searchByDate} />
          </div>
        </div>        
      </div>

      <div className={s.container}>
        <div className={s.last_pictures}>
          {currentPicture && (
            <PictureList
              onClick={updatecurrentPicture}
              listPicture={lastFivePictures}
            />
          )}
        </div>

        <div className={s.picture_details}
        style={{
          background: currentPicture
            ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
            url("${currentPicture.url}") no-repeat center / cover`
            : "black",
        }}
        >
          {currentPicture && <PictureDetail picture={currentPicture} />}
        </div>
      </div>
      
    </div>
  );
}

export default App;
