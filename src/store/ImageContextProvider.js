import React, { useReducer } from 'react';
import ImageContext from './image-context';

const defaultImageState = {
  imageInfo: null,
  rotatedImageInfo: null,
};

const imageReducer = (state, action) => {
  if (action.type === 'SET_IMAGE') {
    return {
      imageInfo: action.imageInfo,
      rotatedImageInfo: action.imageInfo,
    };
  }

  if (action.type === 'SET_ROTATED_IMAGE') {
    return {
      imageInfo: state.imageInfo,
      rotatedImageInfo: action.rotatedImageInfo,
    };
  }
  return defaultImageState;
};

const ImageProvider = (props) => {
  const [imageState, dispatchImageAction] = useReducer(imageReducer, defaultImageState);
  const { children } = props;
  const setImageInfoHandler = (imageInfo) => {
    dispatchImageAction({ type: 'SET_IMAGE', imageInfo });
  };

  const setRotatedImageInfoHandler = (rotatedImageInfo) => {
    dispatchImageAction({ type: 'SET_ROTATED_IMAGE', rotatedImageInfo });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const imageContext = {
    imageInfo: imageState.imageInfo,
    rotatedImageInfo: imageState.rotatedImageInfo,
    setImageInfo: setImageInfoHandler,
    setRotatedImageInfo: setRotatedImageInfoHandler,
  };

  return <ImageContext.Provider value={imageContext}>{children}</ImageContext.Provider>;
};

export default ImageProvider;
