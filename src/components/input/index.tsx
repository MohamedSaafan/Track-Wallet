import Styles from "./input.module.scss";
interface Props {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  className?: string;
  image?: any;
  onImageClick?: () => void;
}

const Input: React.FC<Props> = ({
  label,
  type,
  value,
  placeholder,
  className,
  image,
  onImageClick,
}) => {
  const id = Math.random() * 100 + label;
  const inputClassName = className || "";
  const handleImageClick = onImageClick ? onImageClick : () => {};

  const renderImage = () => {
    if (image)
      return (
        <button onClick={handleImageClick} className={Styles.input__image}>
          <img src={image} alt={label} />
        </button>
      );
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
