import { useRef, useEffect } from "react";
import classes from "./ImageConfiguration.module.css";
const ImageConfiguration = (props) => {
  const rotationDegreeInputRef = useRef();
  const rotateChangeHandler = () => {
    const angle = rotationDegreeInputRef.current.value;
    props.onApplyRotation(angle);
  };
  const fileName = (props.imageInfo && props.imageInfo.fileName) || "";
  const width =
    (props.imageInfo &&
      props.imageInfo.imageData &&
      props.imageInfo.imageData.width) ||
    "";
  const height =
    (props.imageInfo &&
      props.imageInfo.imageData &&
      props.imageInfo.imageData.height) ||
    "";
  const rotationAngle =
    (props.imageInfo && props.imageInfo.rotationAngle) || "";
  useEffect(() => {
    rotationDegreeInputRef.current.value = rotationAngle;
  }, [rotationAngle]);

  return (
    <div className={classes.imageConfiguration}>
      <label>{`File: ${fileName}`}</label>
      <label>{`Width: ${width}`}</label>
      <label>{`Height: ${height}`}</label>
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
    </div>
  );
};

export default ImageConfiguration;
