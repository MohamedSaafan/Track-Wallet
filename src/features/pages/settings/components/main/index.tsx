import Styles from "./main.module.scss";
import dollarIcon from "../../../../../images/settings/dollar.svg";
import sheildIcon from "../../../../../images/settings/sheild.svg";
import { Link } from "react-router-dom";
interface Props {
  openPopup: () => void;
}

const Main: React.FC<Props> = ({ openPopup }) => {
  return (
    <main className={Styles.main__main}>
      <button
        className={`${Styles.main__btn} ${Styles.main__btnCurrencies}`}
        onClick={openPopup}
      >
        <div>
          <span>
            {" "}
            <img src={dollarIcon} alt='dollar Symbol' />{" "}
          </span>{" "}
          Currency
        </div>
        <div>USD (Default)</div>
      </button>
      <Link
        to='/view-secret-recovery-phrase'
        className={`${Styles.main__btnViewsecret} ${Styles.main__btn}`}
      >
        <span>
          {" "}
          <img src={sheildIcon} alt='protection icon' />{" "}
        </span>{" "}
        View Secret Recovery Phrase
      </Link>
    </main>
  );
};

export default Main;
