import ImageUploader from'./ImageUploader';
import ImageConfiguration from './ImageDetails';
import classes from './ImageConfigurationPanel.module.css'

  
const ImageConfigurationPanel = (props) => {

  return <div className={classes.leftPanel}> 
    <ImageUploader setImageInfo = {props.setImageInfo} setRotatedImageInfo = {props.setRotatedImageInfo}></ImageUploader>
    <ImageConfiguration rotatedImageInfo = {props.rotatedImageInfo} imageInfo = {props.imageInfo} setRotatedImageInfo = {props.setRotatedImageInfo}></ImageConfiguration>
    </div>;
};

export default ImageConfigurationPanel;
