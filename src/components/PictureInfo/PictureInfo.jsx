
import s from "./style.module.css";

const PictureInfo = ({ picture }) => {
 
  return (
    <div>
      <div className={s.title}>{picture.title}</div>            
      <div className={s.date}>{picture.date}</div>
      <div className={s.description}>{picture.explanation}</div>
      {
      picture.copyright &&
      <span className={s.copyright}>copyright: {picture.copyright}</span>      
      }
    </div>
  );
};

export default PictureInfo;
