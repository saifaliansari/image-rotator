import React from 'react';
import ImageRotationConfigView from './ImageRotationConfigView';
import classes from './ImageDetails.module.css';

const ImageConfiguration = (props) => {
  const { imageInfo, rotatedImageInfo, setRotatedImageInfo } = props;
  const fileName = (rotatedImageInfo && rotatedImageInfo.fileName) || '';
  const width = (rotatedImageInfo && rotatedImageInfo.imageData && rotatedImageInfo.imageData.width) || '';
  const height = (rotatedImageInfo && rotatedImageInfo.imageData && rotatedImageInfo.imageData.height) || '';

  return (
    <div className={classes.imageDetails}>
      <label>{`File: ${fileName}`}</label>
      <label>{`Width: ${width}`}</label>
      <label>{`Height: ${height}`}</label>
      <ImageRotationConfigView
        setRotatedImageInfo={setRotatedImageInfo}
        rotatedImageInfo={rotatedImageInfo}
        imageInfo={imageInfo}
      />
    </div>
  );
};

export default ImageConfiguration;
