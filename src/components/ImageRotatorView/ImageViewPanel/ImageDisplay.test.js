import React, { useRef } from 'react';
import { screen } from '@testing-library/react';
import ImageDisplay from './ImageDisplay';
import { createMockImage, createContextData, customContextRender } from '../../../utils/testUtils';

jest.mock('react', () => {
  const originReact = jest.requireActual('react');
  const mUseRef = jest.fn();
  return {
    ...originReact,
    useRef: mUseRef,
  };
});

describe('ImageDisplayView', () => {
  test('can render image and render time', () => {
    const state = createContextData('test.png', 90, 10);
    const imageData = createMockImage();
    state.rotatedImageInfo.imageData = imageData;
    const canvas = document.createElement('canvas');
    useRef.mockReturnValueOnce({ current: canvas });
    customContextRender(<ImageDisplay />, state);
    const processingTime = screen.getByText('Time to Render: 10ms');
    expect(processingTime).toBeInTheDocument();
  });

  test('will not show render time if it is zero', () => {
    const state = createContextData('test.png', 90, 0);
    const imageData = createMockImage();
    state.rotatedImageInfo.imageData = imageData;
    const canvas = document.createElement('canvas');
    useRef.mockReturnValueOnce({ current: canvas });
    customContextRender(<ImageDisplay />, state);
    const processingTime = screen.queryByText('Time to Render:');
    expect(processingTime).toBeNull();
  });
});
