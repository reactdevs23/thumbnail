import React from "react";
import styles from "./AttractiveShocking.module.css";

const AttractiveShockingFact = ({
  title,
  tagline,
  img,
  fontFamily,
  primaryColor,
  secondaryColor,
  titleBg,
  backgroundColor,
  noBorder,
  titleColor,
}) => {
  return (
    <div
      className={styles.mainWrapper}
      style={{
        "--primaryColor": primaryColor,
        "--secondaryColor": secondaryColor,
        "--titleBg": titleBg,
        fontFamily: fontFamily,
        background: backgroundColor,
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          {title.map((el, i) => (
            <h2
              className={[styles.title, i % 2 === 0 && styles.oddTitle].join(
                " "
              )}
              style={{
                background: i % 2 !== 0 && titleBg,
                border: noBorder && "none",
                color: i % 2 !== 0 && titleColor,
              }}
              key={i}
            >
              {el}
            </h2>
          ))}
          {tagline && <p className={styles.tagline}>{tagline}</p>}
        </div>
        <img src={img} alt="#" className={styles.img} />
      </div>
    </div>
  );
};

export default AttractiveShockingFact;
