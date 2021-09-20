import React from "react";
import Styles from "./to-modal.module.scss";
import SearchInput from "../../../../components/search-input";
import closeIcon from "../../../../images/close.svg";

interface Props {
  onCloseClick: () => void;
}

const ToModal: React.FC<Props> = ({ onCloseClick }) => {
  return (
    <div className={Styles.tomodal}>
      <div className={Styles.tomodal__content}>
        <button className={Styles.tomodal__close} onClick={onCloseClick}>
          <img src={closeIcon} alt='close' />
        </button>
        <h3 className={Styles.tomodal__heading}>My Accounts</h3>
        <div className={Styles.tomodal__input}>
          <SearchInput />
        </div>
        <div className={Styles.tomodal__line}></div>
      </div>
    </div>
  );
};

export default ToModal;
