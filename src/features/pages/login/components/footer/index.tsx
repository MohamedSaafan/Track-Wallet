import Styles from "./footer.module.scss";
import arrowDown from "../../../../../images/login/arrow-down.svg";
interface Props {
  setIsPopupModelOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer: React.FC<Props> = ({ setIsPopupModelOpened }) => {
  const handleButtonClick = () => {
    setIsPopupModelOpened(true);
  };
  return (
    <footer className={Styles.footer}>
      <button className={Styles.footer__btn} onClick={handleButtonClick}>
        <img src={arrowDown} alt='arrow-down' />
        Import using secret recovery phrase{" "}
      </button>
    </footer>
  );
};

export default Footer;
