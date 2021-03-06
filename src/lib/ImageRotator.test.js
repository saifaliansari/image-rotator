/* eslint-disable no-underscore-dangle */

import rewire from 'rewire';
import { createMockImage } from '../utils/testUtils';

const myImageRotator = rewire('./ImageRotator.js');
const isImageDataValid = myImageRotator.__get__('isImageDataValid');
const calculateTargetDimensions = myImageRotator.__get__('calculateTargetDimensions');
const rotatePoint = myImageRotator.__get__('rotatePoint');
const rotateImage = myImageRotator.__get__('rotateImage');
const rotate = myImageRotator.__get__('rotate');

describe('ImageRotator', () => {
  describe('isImageDataValid', () => {
    test('checks  for null image', () => {
      expect(() => isImageDataValid(null)).toThrow(new Error('No image data provided'));
    });

    test('checks  for correct dimensions', () => {
      const imageData = createMockImage();
      const dummyImage = { data: imageData.data, height: 2, width: 5 };
      expect(() => isImageDataValid(dummyImage)).toThrow(
        new Error('Image dimensions are corrupted'),
      );
    });

    test('checks  for valid imageData', () => {
      const imageData = createMockImage();
      expect(() => isImageDataValid(imageData)).not.toThrow();
    });
  });
  describe('calculateTargetDimensions', () => {
    test('can get the new dimensions for the rotation', () => {
      expect(calculateTargetDimensions(10, 15, Math.PI / 2)).toEqual({ width: 15, height: 10 });
    });
  });

  describe('rotatePoint', () => {
    test('can rotate a point by a given angle on a 2d plane', () => {
      expect(rotatePoint(2, 3, 0, 0, Math.PI / 2)).toEqual({ x: -3, y: 2 });
    });
  });
  describe('rotateImage', () => {
    test('can rotate a image by 90 degrees', () => {
      const originalImageArray = [
        0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 255,
      ];
      const rotatedImageArray = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0,
        0, 0, 0, 0, 0, 0, 0,
      ];
      const rotatedImage = Uint8ClampedArray.from(rotatedImageArray);
      const rotatedImageInfo = rotateImage(originalImageArray, 3, 3, Math.PI / 2.0);
      const resultRotatedImageArray = Uint8ClampedArray.from(rotatedImageInfo.data);
      expect(resultRotatedImageArray).toEqual(rotatedImage);
    });
  });
  describe('rotate', () => {
    test('will not apply rotation algorithm is the angle is 360', () => {
      const originalImage = createMockImage();
      expect(rotate(originalImage, 360)).toEqual(originalImage);
    });
    test('will throw error if the angle is not a number', () => {
      const originalImage = createMockImage();
      expect(() => rotate(originalImage, 'a')).toThrow(new Error('Angle must be number'));
    });
  });
});
