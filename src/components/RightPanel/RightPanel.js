import ImageDisplay from "./ImageDisplay";
import classes from "./RightPanel.module.css";
const RightPanel = () => {
  return <div className={classes.rightPanel}>
    <ImageDisplay></ImageDisplay>
  </div>;
};

export default RightPanel;
