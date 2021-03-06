import NavHeader from "../../../components/nav-header";
import Styles from "./send.module.scss";
import toIcon from "../../../images/send/to.svg";
import assetIcon from "../../../images/send/asset.svg";
import Input from "../../../components/input";
import From from "./from";
import { useState } from "react";
import ToModal from "./to-modal";
import AssetsModal from "./assets-modal";

interface Props {}

const Send: React.FC<Props> = (props) => {
  const [shouldShowToModal, setShouldShowToModal] = useState(false);
  const [shouldShowAssetsModal, setShouldShowAssetsModal] = useState(false);

  const handleToModalCloseClick = () => {
    setShouldShowToModal(false);
  };
  const handleAssetsModalCloseClick = () => {
    setShouldShowAssetsModal(false);
  };
  const openToModal = () => {
    setShouldShowToModal(true);
  };
  const openAssetsModal = () => {
    setShouldShowAssetsModal(true);
  };
  return (
    <div className={`page ${Styles.send}`}>
      <NavHeader link='/home' title='Send' />

      <From />
      <div className={Styles.send__inputWrapper}>
        <Input
          label='To'
          placeholder=''
          type='text'
          value=''
          image={toIcon}
          className={Styles.send__input}
          onImageClick={openToModal}
        />{" "}
      </div>
      <div className={Styles.send__inputWrapper}>
        <Input
          label='Asset'
          placeholder=''
          type='text'
          value=''
          image={assetIcon}
          className={Styles.send__input}
          onImageClick={openAssetsModal}
        />
      </div>
      <div className={Styles.send__inputWrapper}>
        <Input
          label='Amount'
          placeholder=''
          type='number'
          value=''
          className={Styles.send__input}
        />
      </div>

      <footer className={Styles.send__footer}>
        <button
          className={`${Styles.send__footer__btnCancel} ${Styles.send__footer__btn}`}
        >
          Cancel
        </button>
        <button
          className={`${Styles.send__footer__btnSend} ${Styles.send__footer__btn}`}
        >
          Send
        </button>
      </footer>
      {shouldShowToModal ? (
        <ToModal onCloseClick={handleToModalCloseClick} />
      ) : (
        <> </>
      )}
      {shouldShowAssetsModal ? (
        <AssetsModal onCloseClick={handleAssetsModalCloseClick} />
      ) : (
        <> </>
      )}
    </div>
  );
};

export default Send;
