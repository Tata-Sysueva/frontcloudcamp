import { type ReactNode } from 'react';

import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nextForTests from 'shared/config/i18n/i18nextForTest';

export function renderWithTranslation(component: ReactNode) {
  return render(
    <MemoryRouter>
      <I18nextProvider i18n={i18nextForTests}>{component}</I18nextProvider>
    </MemoryRouter>
  );
}
