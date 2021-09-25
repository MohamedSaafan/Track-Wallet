import Styles from "./currency-popup.module.scss";
import closeIcon from "../../../../../images/close.svg";
import SearchInput from "./components/search-input";
import CurrenciesDirectory from "./components/currencies-directory";
interface Props {
  closePopup: () => void;
}

const CurrencyPopUp: React.FC<Props> = ({ closePopup }) => {
  return (
    <div className='popup'>
      <div className={Styles.content}>
        <h3 className={Styles.content__heading}>Currency</h3>
        <button className={Styles.content__close} onClick={closePopup}>
          <img src={closeIcon} alt='close Icon' />
        </button>
        <SearchInput />
        <div className={Styles.content__line}></div>
        <CurrenciesDirectory />
      </div>
    </div>
  );
};

export default CurrencyPopUp;
