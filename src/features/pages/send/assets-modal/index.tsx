import SearchInput from "../../../../components/search-input";
import Styles from "./assets-modal.module.scss";
import closeIcon from "../../../../images/close.svg";
import Asset from "../../../../components/asset-component";

interface Props {
  onCloseClick: () => void;
}

const AssetsModal: React.FC<Props> = ({ onCloseClick }) => {
  return (
    <div className={Styles.assetsmodal}>
      <div className={Styles.assetsmodal__content}>
        <button className={Styles.assetsmodal__close} onClick={onCloseClick}>
          <img src={closeIcon} alt='close' />
        </button>

        <h3 className={Styles.assetsmodal__heading}>My Assets</h3>

        <div className={Styles.assetsmodal__input}>
          <SearchInput />
        </div>
        <div className={Styles.assetsmodal__line}></div>
        <div className={Styles.assetsmodal__assets}>
          <Asset />
          <Asset />
          <Asset />
          <Asset />
        </div>
      </div>
    </div>
  );
};

export default AssetsModal;
