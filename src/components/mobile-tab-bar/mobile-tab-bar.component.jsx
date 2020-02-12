import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
/// project files
import styles from "./mobile-tab-bar.module.scss";

function TabPanel(props) {
  const { children, value, index } = props;

  return value === index && <div  className={styles.bigContainer}>{children}</div>;
}

export default function SimpleTabs({ children }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      
        <TabPanel value={value} index={0}>
          {children[0]}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {children[1]}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {children[2]}
        </TabPanel>
      
    </div>
  );
}
