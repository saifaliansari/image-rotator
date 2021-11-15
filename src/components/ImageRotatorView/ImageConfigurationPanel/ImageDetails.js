import ImageRotationConfigView from "./ImageRotationConfigView";
import classes from "./ImageDetails.module.css";

const ImageConfiguration = (props) => {
  const fileName =
    (props.rotatedImageInfo && props.rotatedImageInfo.fileName) || "";
  const width =
    (props.rotatedImageInfo &&
      props.rotatedImageInfo.imageData &&
      props.rotatedImageInfo.imageData.width) ||
    "";
  const height =
    (props.rotatedImageInfo &&
      props.rotatedImageInfo.imageData &&
      props.rotatedImageInfo.imageData.height) ||
    "";

  return (
    <div className={classes.imageDetails}>
      <label>{`File: ${fileName}`}</label>
      <label>{`Width: ${width}`}</label>
      <label>{`Height: ${height}`}</label>
      <ImageRotationConfigView
        setRotatedImageInfo={props.setRotatedImageInfo}
        rotatedImageInfo = {props.rotatedImageInfo}
        imageInfo={props.imageInfo}
      ></ImageRotationConfigView>
    </div>
  );
};

export default ImageConfiguration;
