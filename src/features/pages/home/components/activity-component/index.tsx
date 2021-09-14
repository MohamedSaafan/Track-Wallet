import React from "react";
import Styles from "./activity-component.module.scss";

interface Props {}

const Activity: React.FC<Props> = (props) => {
  return (
    <div className={Styles.activity}>
      <div className={Styles.activity__circle}></div>
      <div className={Styles.activity__info}>
        <h3 className={Styles.activity__heading}>Activity Name</h3>
        <div className={Styles.activity__description}>
          <p className={Styles.activity__status}>status</p>
          <p className={Styles.activity__description__info}>
            desctiption goes here....
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activity;
