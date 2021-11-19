import React from 'react';
import { screen } from '@testing-library/react';
import ImageDetails from './ImageDetails';
import { createContextData, customContextRender } from '../../../utils/testUtils';

describe('ImageDetailsView', () => {
  test('can render with all image Info', () => {
    const state = createContextData('test.png', 90, 10);
    customContextRender(<ImageDetails />, state);
    const fileNameSpan = screen.getByText('File: test.png');
    const widthSpan = screen.getByText('Width: 10');
    const heightSpan = screen.getByText('Height: 10');
    expect(fileNameSpan).toBeInTheDocument();
    expect(widthSpan).toBeInTheDocument();
    expect(heightSpan).toBeInTheDocument();
  });
});
