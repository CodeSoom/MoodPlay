import React from 'react';

import { render } from '@testing-library/react';

import Recommendation from './Recommendation';

test('Recommendation', () => {
  const { container } = render(<Recommendation />);

  expect(container)
    .toHaveTextContent('이런건 어떠세요?');
  expect(container)
    .toHaveTextContent('당신의 MBTI를 들어볼까요? 당신의 MBTI를 검색해보세요.');
  expect(container)
    .toHaveTextContent('좋아하는 가수를 검색해보세요.');
  expect(container)
    .toHaveTextContent('원하는 년대를 검색해 추억의 플레이리스트를 들어보세요');
});
