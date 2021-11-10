import classes from "./ImageConfiguration.module.css";
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
      <div className={classes.rotateConfig}>
        <label>Rotate:</label>
        <input
          className={classes.rotateConfig__degree}
          type="text"
          maxLength="3"
          size="3"
        ></input>
        <button className={classes.rotateConfig__button}>Apply</button>
      </div>
    </div>
  );
};

export default ImageConfiguration;
