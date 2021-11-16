import { React, useState } from 'react';
import ImageConfigurationPanel from './ImageConfigurationPanel/ImageConfigurationPanel';
import ImageViewPanel from './ImageViewPanel/ImageViewPanel';

const ImageRotatorView = () => {
  const [imageInfo, setImageInfo] = useState(null);
  const [rotatedImageInfo, setRotatedImageInfo] = useState(null);
  return (
    <>
      <ImageConfigurationPanel
        imageInfo={imageInfo}
        rotatedImageInfo={rotatedImageInfo}
        setImageInfo={setImageInfo}
        setRotatedImageInfo={setRotatedImageInfo}
      />
      <ImageViewPanel rotatedImageInfo={rotatedImageInfo} />
    </>
  );
};

export default ImageRotatorView;
