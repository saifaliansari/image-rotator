import ImageUploader from'./ImageUploader';
import ImageConfiguration from './ImageConfiguration';
import classes from './LeftPanel.module.css'

  
const LeftPanel = (props) => {
  const imageUploadHandler = (imageInfo)=>{
    props.onImageUploaded(imageInfo);
  }

  return <div className={classes.leftPanel}> 
    <ImageUploader onImageUploaded = {imageUploadHandler}></ImageUploader>
    <ImageConfiguration imageInfo = {props.imageInfo} onApplyRotation = {props.onApplyRotation}></ImageConfiguration>
    </div>;
};

export default LeftPanel;
