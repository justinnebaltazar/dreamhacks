

import styles from "./HomeWrapper.module.css";

const HomeWrapper = ({ children }) => {
  return <div className = {styles.HomeWrapper}>{children}</div>;
};

export default HomeWrapper;