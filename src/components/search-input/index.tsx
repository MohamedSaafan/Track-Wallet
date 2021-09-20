import React from "react";
import Styles from "./search-input.module.scss";
import searchIcon from "../../images/search.svg";

interface Props {}

const SearchInput: React.FC<Props> = (props) => {
  return (
    <div className={Styles.inputWrapper}>
      <input type='text' className={Styles.input} id='searchInput' />

      <label htmlFor='searchInput' className={Styles.inputSearch}>
        <img src={searchIcon} alt='search' />
      </label>
    </div>
  );
};

export default SearchInput;
