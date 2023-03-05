import s from "./style.module.css";

const Logo = ({ image }) => (
  <div>
    <div className={s.container}>
      <img className={s.img} src={image} alt="Logo NASA" />      
    </div>
  </div>
);


export default Logo;
