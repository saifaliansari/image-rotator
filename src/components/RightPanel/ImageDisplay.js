import { useEffect, useRef } from "react";
import classes from "./ImageDisplay.module.css";
const ImageDisplay = (props) => {
  const canvasRef = useRef();
  const imageData = props.imageInfo &&props.imageInfo.imageData;
  const canvas = canvasRef.current;
  useEffect(() => {
    if ((canvas !== null) & (imageData !== null)) {
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      canvas.getContext("2d").putImageData(imageData, 0, 0);
    }
  }, [canvas, imageData]);
  return (
    <div className={classes.imageDisplayContainer}>
      <label className={classes.processingTime}>Time to Render</label>
      <div className={classes.imageDisplayCanvasContainer}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default ImageDisplay;
