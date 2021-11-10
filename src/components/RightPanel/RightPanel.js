import ImageDisplay from "./ImageDisplay";
import classes from "./RightPanel.module.css";
const RightPanel = (props) => {
  return <div className={classes.rightPanel}>
    <ImageDisplay imageInfo = {props.imageInfo} ></ImageDisplay>
  </div>;
};

export default RightPanel;
