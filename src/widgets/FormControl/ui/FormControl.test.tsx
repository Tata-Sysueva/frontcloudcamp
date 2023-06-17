import { render } from '@testing-library/react';

import { FormControl } from './FormControl';

describe('FormControl', () => {
  it('renders the label', () => {
    const { getByLabelText } = render(
      <FormControl
        id="username"
        label="Username"
      >
        <input
          type="text"
          id="username"
          name="username"
        />
      </FormControl>
    );

    expect(getByLabelText('Username')).toBeInTheDocument();
  });

  it('renders the helper text', () => {
    const { getByText } = render(
      <FormControl
        id="username"
        helperText="Enter your username"
      >
        <input
          type="text"
          id="username"
          name="username"
        />
      </FormControl>
    );

    expect(getByText('Enter your username')).toBeInTheDocument();
  });

  it('renders the error message', () => {
    const { getByText } = render(
      <FormControl
        id="username"
        errorMessage="Username is already taken"
      >
        <input
          type="text"
          id="username"
          name="username"
        />
      </FormControl>
    );

    expect(getByText('Username is already taken')).toBeInTheDocument();
  });
});
