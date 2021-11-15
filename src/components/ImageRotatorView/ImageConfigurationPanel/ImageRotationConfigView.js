import { useEffect, useRef } from "react";
import rotate from "../../../utils/imageRotationUtil";
import classes from "./ImageRotationConfigView.module.css";

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
  }
};

const ImageRotationConfigView = (props) => {
  const rotationDegreeInputRef = useRef();

  const rotateChangeHandler = () => {
    const angle = rotationDegreeInputRef.current.value;
    if (!isNaN(parseFloat(angle))) {
      if (!props.imageInfo) {
        return alert(`Please select an image first`);
      }
      const rotatedImageInfo = rotateImage(props.imageInfo, angle);
      props.setRotatedImageInfo((state) => {
        return rotatedImageInfo;
      });
    }
  };

  const rotationAngle =
    (props.rotatedImageInfo && props.rotatedImageInfo.rotationAngle) || "";
  useEffect(() => {
    rotationDegreeInputRef.current.value = rotationAngle;
  }, [rotationAngle]);

  return (
    <div className={classes.rotateConfig}>
      <label>Rotate:</label>
      <input
        className={classes.rotateConfig__degree}
        type="text"
        maxLength="3"
        size="3"
        ref={rotationDegreeInputRef}
      ></input>
      <button
        className={classes.rotateConfig__button}
        onClick={rotateChangeHandler}
      >
        Apply
      </button>
    </div>
  );
};

export default ImageRotationConfigView;
