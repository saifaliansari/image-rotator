import React from 'react';
import ImageDisplay from './ImageDisplay';
import classes from './ImageViewPanel.module.css';

const ImageViewPanel = (props) => {
  const { rotatedImageInfo } = props;
  return (
    <div className={classes.rightPanel}>
      <ImageDisplay rotatedImageInfo={rotatedImageInfo} />
    </div>
  );
};

export default ImageViewPanel;
