import { useEffect, useRef } from "react";
import classes from "./ImageRotationConfigView.module.css";

const ImageRotationConfigView = (props) => {
  const rotationDegreeInputRef = useRef();

  const rotateChangeHandler = () => {
    const angle = rotationDegreeInputRef.current.value;
    if (!isNaN(parseFloat(angle))) {
      props.onApplyRotation(angle);
    }
  };

  const rotationAngle =
    (props.imageInfo && props.imageInfo.rotationAngle) || "";
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
