import React, { useContext } from 'react';
import ImageRotationConfigView from './ImageRotationConfigView';
import classes from './ImageDetails.module.css';
import ImageContext from '../../../store/image-context';

const ImageConfiguration = () => {
  const imageCtx = useContext(ImageContext);
  const { rotatedImageInfo } = imageCtx;
  const fileName = (rotatedImageInfo && rotatedImageInfo.fileName) || '';
  const width = (rotatedImageInfo && rotatedImageInfo.imageData && rotatedImageInfo.imageData.width) || '';
  const height = (rotatedImageInfo && rotatedImageInfo.imageData && rotatedImageInfo.imageData.height) || '';

  return (
    <div className={classes.imageDetails}>
      <span>{`File: ${fileName}`}</span>
      <span>{`Width: ${width}`}</span>
      <span>{`Height: ${height}`}</span>
      <ImageRotationConfigView />
    </div>
  );
};

export default ImageConfiguration;
