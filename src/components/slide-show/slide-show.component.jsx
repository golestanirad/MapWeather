import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import _ from "lodash";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Fab from "@material-ui/core/Fab";
/// project files
import styles from "./slide-show.module.scss";

const CustomArrow = props => {
  const { className, onClick, style } = props;
  // return <div className={className + " " + styles.arrow} onClick={onClick} />;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block" }}
    >
      8
    </div>
    // <div className={className + " " + styles.arrows}>
    //   <div className={className + " " + styles.arrow} onClick={onClick} />
    //   <div className={className + " " + styles.arrow} onClick={onClick} />
    // </div>
  );
};

const MySlideShow = ({ children }) => {
  const settings = {    
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />
  };

  return (
    <div className={styles.container}>
      <div className={styles.slideContainer}>
        <Slider {...settings}>{children}</Slider>
      </div>
      <Fab color="primary" aria-label="add">
        <FirstPageIcon />
      </Fab>
      <Fab color="primary" aria-label="add">
        <LastPage />
      </Fab>
    </div>
  );
};

export default MySlideShow;
