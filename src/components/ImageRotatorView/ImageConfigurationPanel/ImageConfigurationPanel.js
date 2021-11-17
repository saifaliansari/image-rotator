import React from 'react';
import ImageUploader from './ImageUploader';
import ImageConfiguration from './ImageDetails';
import classes from './ImageConfigurationPanel.module.css';

const ImageConfigurationPanel = () => (
  <div className={classes.leftPanel}>
    <ImageUploader />
    <ImageConfiguration />
  </div>
);

export default ImageConfigurationPanel;
