import React from "react";
import { useHistory } from "react-router";
import Input from "../../../../../components/input";
import Styles from "./form.module.scss";

interface Props {}

const Form: React.FC<Props> = (props) => {
  const history = useHistory();
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleUnlockClick = () => {
    history.push("/home");
  };
  return (
    <form onSubmit={handleSubmit} className={Styles.form}>
      <Input
        type='text'
        placeholder='Type your Password'
        label='Enter Password'
        value=''
      />

      <button className={`${Styles.form__btn}`} onClick={handleUnlockClick}>
        Unlock
      </button>
    </form>
  );
};

export default Form;
