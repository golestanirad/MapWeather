import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import _ from "lodash";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Fab from "@material-ui/core/Fab";
/// project files
import styles from "./slide-show.module.scss";

const MySlideShow = ({ children }) => {
  /// HOOKS
  const slideRef = useRef(null);
  //// OTHERS
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  ////// RENDER
  return (
    <div className={styles.container}>
      <div className={styles.slideContainer}>
        <Slider {...settings} ref={slideRef}>
          {children}
        </Slider>
      </div>
      <div className={styles.jumpIcons}>
        <Fab color="primary" aria-label="add" className={styles.jumpIcon}>
          <FirstPageIcon
            onClick={() => {
              slideRef.current.slickGoTo(0);
            }}
          />
        </Fab>
        <Fab color="primary" aria-label="add" className={styles.jumpIcon}>
          <LastPage
            onClick={() => {
              slideRef.current.slickGoTo(39);
            }}
          />
        </Fab>
      </div>
    </div>
  );
};

export default MySlideShow;
