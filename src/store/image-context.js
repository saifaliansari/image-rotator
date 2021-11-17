import React from 'react';

const ImageContext = React.createContext({
  imageInfo: null,
  rotatedImageInfo: null,
  setImageInfo: () => {},
  setRotatedImageInfo: () => {},
});

export default ImageContext;
