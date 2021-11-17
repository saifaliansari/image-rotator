import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import ImageContext from '../../../store/image-context';
import rotate from '../../../utils/imageRotationUtil';
import classes from './ImageRotationConfigView.module.css';

const rotateImage = (imageInfo, angle) => {
  try {
    const start = performance.now();
    const rotatedImageData = rotate(imageInfo.imageData, angle);
    const end = performance.now();
    return {
      fileName: imageInfo.fileName,
      imageData: rotatedImageData,
      rotationAngle: angle,
      processingTime: end - start,
    };
  } catch (error) {
    alert(error.message);
    return null;
  }
};

const ImageRotationConfigView = () => {
  const rotationDegreeInputRef = useRef();
  const imageCtx = useContext(ImageContext);
  const [angleIsValid, setAngleIsValid] = useState(true);
  const { imageInfo, rotatedImageInfo, setRotatedImageInfo } = imageCtx;

  const rotateChangeHandler = () => {
    const angle = rotationDegreeInputRef.current.value;
    if (!Number.isNaN(parseFloat(angle))) {
      setAngleIsValid(true);
      if (!imageInfo) {
        alert('Please select an image first');
        return;
      }
      const newRotatedImageInfo = rotateImage(imageInfo, angle);
      if (newRotatedImageInfo) {
        setRotatedImageInfo(newRotatedImageInfo);
      }
    } else {
      setAngleIsValid(false);
    }
  };

  const rotationAngle = (rotatedImageInfo && rotatedImageInfo.rotationAngle) || '';
  useEffect(() => {
    rotationDegreeInputRef.current.value = rotationAngle;
  }, [rotationAngle]);

  return (
    <div className={classes.rotateConfig}>
      <label>
        Rotate:
        <input
          className={classes.rotateConfig__degree}
          type="text"
          maxLength="3"
          size="3"
          ref={rotationDegreeInputRef}
        />
      </label>
      <button type="button" className={classes.rotateConfig__button} onClick={rotateChangeHandler}>
        Apply
      </button>
      {!angleIsValid && <p className={classes.errorText}> Enter valid angle value</p>}
    </div>
  );
};

export default ImageRotationConfigView;
