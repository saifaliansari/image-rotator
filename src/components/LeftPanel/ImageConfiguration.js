import classes from "./ImageConfiguration.module.css";
const ImageConfiguration = () => {
  return (
    <div className={classes.imageConfiguration}>
      <label>File: </label>
      <label>Width:</label>
      <label>Height</label>
      <div className={classes.rotateConfig}>
        <label>Rotate:</label>
        <input className = {classes.rotateConfig__degree} type="text" maxLength="3" size="3"></input>
        <button className={classes.rotateConfig__button}>Apply</button>
      </div>
    </div>
  );
};

export default ImageConfiguration;
