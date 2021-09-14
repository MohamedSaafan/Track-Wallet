import Styles from "./pop-up.module.scss";
interface Props {
  setIsPopupModelOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUp: React.FC<Props> = ({ setIsPopupModelOpened }) => {
  const handleCancelClick = () => {
    setIsPopupModelOpened(false);
  };
  return (
    <div className={Styles.popup}>
      <div className={Styles.popup__content}>
        <h3 className={Styles.popup__heading}>Reset Wallet</h3>
        <p className={Styles.popup__warning}>
          Completing this action will remove all data from your current wallet,
          including your secret recovery phrase.
          <br /> <br />
          Make sure you save you save your current seed phrase to gain control
          of your wallet in the future.
        </p>
        <div className={Styles.popup__footer}>
          <button
            className={`${Styles.popup__btnCancel} ${Styles.popup__btn}`}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button className={`${Styles.popup__btnReset} ${Styles.popup__btn}`}>
            Reset Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
