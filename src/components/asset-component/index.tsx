import Styles from "./asset-component.module.scss";
import etherumIcon from "../../images/assets/etherum.svg";

interface Props {}

const Asset: React.FC<Props> = (props) => {
  return (
    <div className={Styles.asset}>
      <div className={Styles.asset__icon}>
        <img src={etherumIcon} alt='etheum' />
      </div>
      <div className={Styles.asset__content}>
        <h4 className={Styles.asset__heading}>0 WETH</h4>
        <p className={Styles.asset__details}>0 USD</p>
      </div>
    </div>
  );
};

export default Asset;
