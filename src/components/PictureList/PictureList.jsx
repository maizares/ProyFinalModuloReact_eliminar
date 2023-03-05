import PictureViewListItem from "../PictureListItem/PictureViewListItem";
import s from "./style.module.css";

const PictureList = ({ onClick, listPicture }) => (

  <div className={s.container_list}>
    <div className={s.title}>Ultimas 5 imagenes:</div>
    <div className={s.list}>
            
      {listPicture.map((l) => {
          return (
            <span key={l.date}> 
              <PictureViewListItem picture={l} onClick={onClick} /> 
            </span>
          );
        })
      }
    </div>
  </div>
);

export default PictureList;
