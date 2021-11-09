import classes from "./ImageDisplay.module.css";
const ImageDisplay = () => {
  return (
    <div className={classes.imageDisplayContainer}>
      <label className={classes.processingTime}>Time to Render</label>
      <div className={classes.imageDisplayCanvasContainer}>
        <canvas className="imageDisplayCanvas" width="500px" height="500px" />
      </div>
    </div>
  );
};

export default ImageDisplay;
