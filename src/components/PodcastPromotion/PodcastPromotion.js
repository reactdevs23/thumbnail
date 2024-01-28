import React from "react";
import styles from "./PodcastPromotion.module.css";

const PodcastPromotion = ({
  icon,
  name,
  title,
  tagline,
  contentBg,
  headingFontFamily,
  fontFamily,
  primaryColor,
  secondaryColor,
  backgroundImg,
  backgroundColor,
}) => {
  return (
    <div
      className={styles.mainWrapper}
      style={{
        "--primaryColor": primaryColor,
        "--secondaryColor": secondaryColor,
        "--contentBg": contentBg,

        "--backgroundColor": backgroundColor,
        fontFamily: fontFamily,
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.nameContainer}>
          <div className={styles.iconContainer}>
            <img src={icon} alt="#" className={styles.icon} />
          </div>
          <p
            className={styles.name}
            dangerouslySetInnerHTML={{ __html: name }}
          ></p>
        </div>
        <h2
          className={styles.title}
          style={{ fontFamily: headingFontFamily }}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        <h3
          className={styles.tagline}
          dangerouslySetInnerHTML={{ __html: tagline }}
        ></h3>
      </div>
    </div>
  );
};

export default PodcastPromotion;
