import { type ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Modal.module.scss';
import { ReactComponent as ErrorSvg } from '../../../assets/icons/error-icon.svg';
import { ReactComponent as SuccessSvg } from '../../../assets/icons/success-icon.svg';
import { CloseButton } from '../CloseButton/CloseButton';

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
}: ModalProps) => (
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
        {isErrorModal && <CloseButton onClose={onClose} />}
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
