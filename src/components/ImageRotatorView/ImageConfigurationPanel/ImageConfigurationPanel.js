import ImageUploader from'./ImageUploader';
import ImageConfiguration from './ImageConfiguration';
import classes from './ImageConfigurationPanel.module.css'

  
const ImageConfigurationPanel = (props) => {

  return <div className={classes.leftPanel}> 
    <ImageUploader onImageUploaded = {props.onImageUploaded}></ImageUploader>
    <ImageConfiguration imageInfo = {props.imageInfo} onApplyRotation = {props.onApplyRotation}></ImageConfiguration>
    </div>;
};

export default ImageConfigurationPanel;
