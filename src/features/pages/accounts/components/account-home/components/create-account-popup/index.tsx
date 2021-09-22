import React, { useState } from "react";
import Styles from "./create-account-popup.module.scss";

interface Props {
  closePopup: () => void;
}
const CreateAccountPopup: React.FC<Props> = ({ closePopup }) => {
  const [name, setName] = useState("Account#2");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div className={Styles.popup}>
      <div className={Styles.popup__content}>
        <h3 className={Styles.popup__heading}>Create Account</h3>
        <label className={Styles.popup__label}>
          Account Name <br />
          <input
            value={name}
            type='text'
            onChange={handleNameChange}
            className={Styles.popup__input}
          />
        </label>

        <div className={Styles.popup__buttons}>
          <button className={Styles.popup__button} onClick={closePopup}>
            Cancel
          </button>
          <button className={Styles.popup__button}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPopup;
