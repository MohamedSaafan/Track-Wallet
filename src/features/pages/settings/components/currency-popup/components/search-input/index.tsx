import Styles from "./search-input.module.scss";
import searchIcon from "../../../../../../../images/search.svg";

interface Props {}

const SearchInput: React.FC<Props> = (props) => {
  return (
    <div className={Styles.inputWrapper}>
      <img src={searchIcon} alt='search' className={Styles.inputImage} />
      <input type='text' placeholder='' className={Styles.input} />
    </div>
  );
};

export default SearchInput;
