import React from 'react';
import ImageUploader from './ImageUploader';
import ImageConfiguration from './ImageDetails';
import classes from './ImageConfigurationPanel.module.css';

const ImageConfigurationPanel = (props) => {
  const {
    imageInfo, rotatedImageInfo, setImageInfo, setRotatedImageInfo,
  } = props;
  return (
    <div className={classes.leftPanel}>
      <ImageUploader setImageInfo={setImageInfo} setRotatedImageInfo={setRotatedImageInfo} />
      <ImageConfiguration
        rotatedImageInfo={rotatedImageInfo}
        imageInfo={imageInfo}
        setRotatedImageInfo={setRotatedImageInfo}
      />
    </div>
  );
};

export default ImageConfigurationPanel;
