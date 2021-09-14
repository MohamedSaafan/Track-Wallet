import Styles from "./input.module.scss";
interface Props {
  label: string;
  type: string;
  value: string;
  placeholder: string;
}

const Input: React.FC<Props> = ({ label, type, value, placeholder }) => {
  const id = Math.random() * 100 + label;
  return (
    <div className={Styles.input}>
      <label htmlFor={id} className={Styles.input__label}>
        {label}
      </label>
      <input
        id={id}
        type={type ? type : "text"}
        placeholder={placeholder ? placeholder : ""}
        className={Styles.input__input}
      />
    </div>
  );
};

export default Input;
