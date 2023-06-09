import { render } from '@testing-library/react';

import { Input } from './Input';

test('renders input component', () => {
  const { getByPlaceholderText } = render(
    <Input
      id="Input"
      placeholder="Test Input"
    />
  );
  const inputElement = getByPlaceholderText('Test Input');

  expect(inputElement).toBeInTheDocument();
});
