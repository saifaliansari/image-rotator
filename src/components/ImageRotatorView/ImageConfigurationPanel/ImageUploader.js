import React, { useContext, useRef } from 'react';
import ImageContext from '../../../store/image-context';
import classes from './ImageUploader.module.css';

const ImageUploader = () => {
  const canvasRef = useRef();
  const imageCtx = useContext(ImageContext);
  const onImagePicked = (event) => {
    if (event.target.files.length === 0) {
      return;
    }
    const image = new Image();
    const imageFile = event.target.files[0];
    image.src = window.URL.createObjectURL(imageFile);
    image.onload = () => {
      canvasRef.current.width = image.width;
      canvasRef.current.height = image.height;
      canvasRef.current.getContext('2d').drawImage(image, 0, 0);
      const imageData = canvasRef.current
        .getContext('2d')
        .getImageData(0, 0, image.width, image.height);
      const imageInfo = {
        fileName: imageFile.name,
        imageData,
        rotationAngle: 0,
        processingTime: 0,
      };
      imageCtx.setImageInfo({
        ...imageInfo,
      });
    };
  };

  return (
    <div className={classes.imageUploadContainer}>
      <label>
        Select File
        <input type="file" name="image" accept="image/*" onChange={onImagePicked} />
      </label>
      <canvas style={{ display: 'none' }} ref={canvasRef} />
    </div>
  );
};

export default ImageUploader;
