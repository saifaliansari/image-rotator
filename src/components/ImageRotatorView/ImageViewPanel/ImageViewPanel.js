import ImageDisplay from "./ImageDisplay";
import classes from "./ImageViewPanel.module.css";

const ImageViewPanel = (props) => {
  return (
    <div className={classes.rightPanel}>
      <ImageDisplay imageInfo={props.imageInfo}></ImageDisplay>
    </div>
  );
};

export default ImageViewPanel;
