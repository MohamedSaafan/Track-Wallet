import { useState } from "react";
import Input from "../../../../../components/input";
import Styles from "./main.module.scss";

interface Props {}

const Main: React.FC<Props> = (props) => {
  const [shouldDisplayInput, setShouldDisplayInput] = useState(true);

  const renderInput = () => {
    if (shouldDisplayInput)
      return (
        <>
          {" "}
          <Input
            placeholder='Enter your password'
            label='Enter Password'
            type='text'
            value=''
          />
        </>
      );
    return (
      <>
        {" "}
        <Input
          placeholder=''
          label=''
          type='text'
          value='word1 word2 word3 word4 word5 word6'
        />
        <div className={Styles.main__copy}>Copy to Clipboard</div>
      </>
    );
  };

  const handleNextClick = () => {
    setShouldDisplayInput(false);
  };
  const handleCancelClick = () => {};
  const handleCloseClick = () => {};
  return (
    <div className={Styles.main}>
      {renderInput()}

      <div className={Styles.main__btns}>
        {shouldDisplayInput ? (
          <>
            {" "}
            <button
              className={`${Styles.main__btnClose} ${Styles.main__btn}`}
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button className={Styles.main__btn} onClick={handleNextClick}>
              Next
            </button>
          </>
        ) : (
          <button className={`${Styles.main__btnClose} ${Styles.main__btn}`}>
            Close
          </button>
        )}
      </div>
    </div>
  );
};
export default Main;
