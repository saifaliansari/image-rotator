import React from 'react';
import ImageConfigurationPanel from './ImageConfigurationPanel/ImageConfigurationPanel';
import ImageViewPanel from './ImageViewPanel/ImageViewPanel';
import ImageProvider from '../../store/ImageContextProvider';

const ImageRotatorView = () => (
  <ImageProvider>
    <ImageConfigurationPanel />
    <ImageViewPanel />
  </ImageProvider>
);

export default ImageRotatorView;
