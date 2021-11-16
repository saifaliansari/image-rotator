import { React, useEffect, useRef } from 'react';
import classes from './ImageDisplay.module.css';

const ImageDisplay = (props) => {
  const canvasRef = useRef();
  const { rotatedImageInfo } = props;
  const imageData = rotatedImageInfo && rotatedImageInfo.imageData;
  const processingTime = rotatedImageInfo && rotatedImageInfo.processingTime;
  const canvas = canvasRef.current;
  useEffect(() => {
    if (canvas !== null && imageData !== null) {
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      canvas.getContext('2d').putImageData(imageData, 0, 0);
    }
  }, [canvas, imageData]);
  return (
    <div className={classes.imageDisplayContainer}>
      {processingTime > 0 && (
        <label className={classes.processingTime}>
          {`Time to Render : ${parseInt(processingTime, 10)}ms`}
        </label>
      )}
      <div className={classes.imageDisplayCanvasContainer}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default ImageDisplay;
