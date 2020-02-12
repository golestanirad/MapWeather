import React from "react";
//// project files
import styles from './playground.module.scss'


const MyComponent = (props) => {
  console.log(111111,props)
  return <div>test :)</div>;
};

const Playground = () => {
  return <MyComponent className={styles.container} />;
};

export default Playground;
