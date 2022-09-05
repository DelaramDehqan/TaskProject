import React from "react";

//import styles
import styles from "./style.module.css";
import location from "../../assets/images/icon.svg";

const Card = ({ data, cardIndex }) => {
  return (
    <div className={styles.body}>
      {data[cardIndex].map((item) => (
        <div className={styles.card}>
          <div className={styles.content}>
            <h3>{item.name}</h3>
            <p className={styles.priceLine}>
              $<span className={styles.number}>{item.price}</span>hrs
            </p>
            <p>per person</p>
            <img className={styles.icon} src={location} />
            <p>{item.location}</p>
          </div>
          <button className={styles.button}>Choose Date</button>
        </div>
      ))}
    </div>
  );
};
export default Card;
