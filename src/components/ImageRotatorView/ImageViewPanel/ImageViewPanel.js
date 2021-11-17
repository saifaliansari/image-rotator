import React from 'react';
import ImageDisplay from './ImageDisplay';
import classes from './ImageViewPanel.module.css';

const ImageViewPanel = () => (
  <div className={classes.rightPanel}>
    <ImageDisplay />
  </div>
);

export default ImageViewPanel;
