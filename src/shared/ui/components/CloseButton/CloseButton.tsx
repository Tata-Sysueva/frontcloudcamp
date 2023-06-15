import { t } from 'i18next';

import { ThemeButton, TypeElement } from 'shared/ui/constants/constants';

import { ReactComponent as CloseSvg } from '../../../assets/icons/close-icon.svg';
import { Button } from '../Button/Button';

export const CloseButton = ({ onClose }: { onClose: () => void }) => (
  <Button
    icon={<CloseSvg />}
    type="button"
    theme={ThemeButton.CLEAR}
    element={TypeElement.BUTTON}
    onClick={onClose}
    className="closeButton"
  >
    <span className="visually-hidden">{t('general_actions:close')}</span>
  </Button>
);
