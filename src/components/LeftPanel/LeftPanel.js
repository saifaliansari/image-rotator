import ImageUploader from'./ImageUploader';
import ImageConfiguration from './ImageConfiguration';
import classes from './LeftPanel.module.css'
const LeftPanel = () => {
  return <div className={classes.leftPanel}> 
    <ImageUploader></ImageUploader>
    <ImageConfiguration></ImageConfiguration>
    </div>;
};

export default LeftPanel;
