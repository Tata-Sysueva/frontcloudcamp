import { render, fireEvent } from '@testing-library/react';
import { MdClose } from 'react-icons/md';
import { MemoryRouter } from 'react-router-dom';

import { TypeElement, ThemeButton } from 'shared/ui/constants/constants';

import { Button } from './Button';

describe('Button', () => {
  it('renders a button element', () => {
    const { getByText } = render(
      <Button element={TypeElement.BUTTON}>Click me</Button>
    );

    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('renders a link element', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Button
          element={TypeElement.LINK}
          link="https://google.com/"
        >
          Click me
        </Button>
      </MemoryRouter>
    );

    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button
        element={TypeElement.BUTTON}
        onClick={handleClick}
      >
        Click me
      </Button>
    );

    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables the button when isDisabled is true', () => {
    const { getByText } = render(
      <Button
        element={TypeElement.BUTTON}
        isDisabled
      >
        Click me
      </Button>
    );

    expect(getByText('Click me')).toBeDisabled();
  });

  it('renders an icon', () => {
    const { getByText } = render(
      <Button
        element={TypeElement.BUTTON}
        icon={<MdClose />}
      >
        Click me
      </Button>
    );

    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('applies a theme', () => {
    const { getByText } = render(
      <Button
        element={TypeElement.BUTTON}
        theme={ThemeButton.OUTLINE}
      >
        Click me
      </Button>
    );

    expect(getByText('Click me')).toHaveClass('button', 'outline');
  });
});
