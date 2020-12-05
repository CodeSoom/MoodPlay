import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import PlaylistCheckbox from './PlaylistCheckbox';

test('PlaylistCheckbox', () => {
  const id = '마이 플레이리스트';

  const { getByLabelText } = render(
    <PlaylistCheckbox id={id} />,
  );

  fireEvent.click(getByLabelText(id));

  expect(getByLabelText(id)).toBeChecked();
});
