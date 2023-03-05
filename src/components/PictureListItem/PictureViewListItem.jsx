import s from "./style.module.css";

const PictureViewListItem = ({ picture, onClick }) => {
  const onClick_ = () => {
    onClick(picture);
  };

  return (
    <div onClick={onClick_} className={s.container}>
      <div className={s.date}>
        {picture.date}
      </div>
      <img
        alt={picture.title}
        src={picture.url}
        className={s.img}
      />
      <div className={s.title}>
        {picture.title}        
      </div>
    </div>
  );
};

export default PictureViewListItem;
