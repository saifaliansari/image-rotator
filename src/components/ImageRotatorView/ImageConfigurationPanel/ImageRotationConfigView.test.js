import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ImageRotationConfigView from './ImageRotationConfigView';
import { createContextData, customContextRender } from '../../../utils/testUtils';

describe('ImageRotationConfigView', () => {
  test('can render with rotated angle data', () => {
    const state = createContextData('test.png', 90, 10);
    customContextRender(<ImageRotationConfigView />, state);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('90');
  });

  test('will show error message if invalid angle is input', () => {
    const state = createContextData('test.png', 90, 10);
    customContextRender(<ImageRotationConfigView />, state);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'a');
    screen.findByText('Enter valid angle value', { timeout: 1000 });
  });
});
