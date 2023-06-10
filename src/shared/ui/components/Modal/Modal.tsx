import { type ReactNode } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeButton, TypeElement } from 'shared/ui/constants/constants';

import cls from './Modal.module.scss';
import CloseSvg from '../../../assets/icons/close-icon.svg';
import ErrorSvg from '../../../assets/icons/error-icon.svg';
import SuccessSvg from '../../../assets/icons/success-icon.svg';
import { Button } from '../Button/Button';

interface ModalProps {
  title: string;
  isErrorModal?: boolean;
  className?: string;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({
  title,
  isErrorModal,
  className = '',
  onClose,
  children
}: ModalProps) => {
  const [t] = useTranslation();

  return (
    <div className={cls.modal}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- Allow in this document */}
      <div
        className={cls.overlay}
        onClick={() => onClose()}
      />

      <div className={classNames(cls.content, {}, [cls[className]])}>
        <header
          className={classNames(
            cls.modalHeader,
            { [cls['modalHeader--withCloseBtn']]: Boolean(isErrorModal) },
            []
          )}
        >
          <h2 className={cls.title}>{title}</h2>
          {isErrorModal && (
            <Button
              icon={<CloseSvg />}
              type="button"
              theme={ThemeButton.CLEAR}
              element={TypeElement.BUTTON}
              onClick={onClose}
              className="closeButton"
            >
              <span className="visually-hidden">
                {t('general_actions:close_modal')}
              </span>
            </Button>
          )}
        </header>
        <div className={cls.mainContent}>
          <div
            className={classNames(
              cls.iconContainer,
              { [cls['iconContainer--error']]: Boolean(isErrorModal) },
              []
            )}
          >
            <span className={cls.icon}>
              {isErrorModal ? <ErrorSvg /> : <SuccessSvg />}
            </span>
          </div>
        </div>

        <footer
          className={classNames(
            cls.modalFooter,
            { [cls['modalFooter--centered']]: Boolean(!isErrorModal) },
            []
          )}
        >
          {children}
        </footer>
      </div>
    </div>
  );
};
