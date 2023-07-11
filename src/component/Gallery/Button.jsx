import style from "./Button.module.css";

const Button = ({ handleClick }) => {
  return (
    <>
      <button className={style.Button} onClick={handleClick}>
        Load more
      </button>
    </>
  );
};
export default Button;
