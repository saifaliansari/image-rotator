import classes from "./ImageConfiguration.module.css";
import ImageRotationConfigView from "./ImageRotationConfigView";
const ImageConfiguration = (props) => {
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

  return (
    <div className={classes.imageConfiguration}>
      <label>{`File: ${fileName}`}</label>
      <label>{`Width: ${width}`}</label>
      <label>{`Height: ${height}`}</label>
      <ImageRotationConfigView
        onApplyRotation={props.onApplyRotation}
        imageInfo={props.imageInfo}
      ></ImageRotationConfigView>
    </div>
  );
};

export default ImageConfiguration;
