import React from 'react';
import { render } from '@testing-library/react';
import ImageContext from '../store/image-context';

const createContextData = (fileName, rotationAngle, processingTime) => ({
  imageInfo: {
    fileName,
    imageData: {
      data: [],
      height: 10,
      width: 10,
    },
    rotationAngle: 0,
    processingTime: 0,
  },
  rotatedImageInfo: {
    fileName,
    imageData: {
      data: [],
      height: 10,
      width: 10,
    },
    rotationAngle,
    processingTime,
  },
  setImageInfo: () => {},
  setRotatedImageInfo: () => {},
});

const createMockImage = () => {
  // creating a stroke inside a rectangular space
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(2, 2);
  ctx.stroke();
  const imageData = ctx.getImageData(0, 0, 2, 2);
  return imageData;
};

const customContextRender = (ui, state) => (
  render(<ImageContext.Provider value={state}>{ui}</ImageContext.Provider>)
);

export { createMockImage, createContextData, customContextRender };
