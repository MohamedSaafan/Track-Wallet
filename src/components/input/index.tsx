import Styles from "./input.module.scss";
interface Props {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  className?: string;
  image?: any;
}

const Input: React.FC<Props> = ({
  label,
  type,
  value,
  placeholder,
  className,
  image,
}) => {
  const id = Math.random() * 100 + label;
  const inputClassName = className || "";
  const renderImage = () => {
    if (image)
      return <img src={image} alt={label} className={Styles.input__image} />;
    return <> </>;
  };

  return (
    <div className={Styles.input}>
      <label htmlFor={id} className={Styles.input__label}>
        {label}
      </label>
      <div className={Styles.input__inputWrapper}>
        <input
          id={id}
          type={type ? type : "text"}
          placeholder={placeholder ? placeholder : ""}
          className={`${Styles.input__input} ${inputClassName}`}
        />
        {renderImage()}
      </div>
    </div>
  );
};

export default Input;
