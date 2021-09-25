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
    return <> </>;
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
