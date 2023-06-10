import { useTranslation } from 'react-i18next';

import { TypeModal } from 'app/constants/constants';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { hideModal, showModal } from 'app/store/modalSlice/modalSlice';
import {
  selectModalIsOpen,
  selectModalType
} from 'app/store/modalSlice/selectors';
import { Button } from 'shared/ui/components/Button/Button';
import { Modal } from 'shared/ui/components/Modal/Modal';
import { Textarea } from 'shared/ui/components/Textarea/Textarea';
import { ThemeButton, TypeElement } from 'shared/ui/constants/constants';
import { FormControl } from 'widgets/FormControl';
import { SwitchersBar } from 'widgets/SwitchersBar';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector(selectModalIsOpen);
  const type = useAppSelector(selectModalType);

  const [t] = useTranslation();

  const closeModal = () => dispatch(hideModal());

  const renderModal = () => {
    switch (type) {
      case TypeModal.SUCCESS:
        return (
          <Modal
            title="Форма успешно отправлена"
            onClose={closeModal}
          >
            <Button
              element={TypeElement.LINK}
              theme={ThemeButton.PRIMARY}
              link="google.com"
            >
              Вернуться на главную
            </Button>
          </Modal>
        );
      case TypeModal.ERROR:
        return (
          <Modal
            title="error"
            isErrorModal
            onClose={closeModal}
          >
            <Button
              element={TypeElement.BUTTON}
              theme={ThemeButton.PRIMARY}
              onClick={() => dispatch(hideModal())}
            >
              Вернуться на главную
            </Button>
          </Modal>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div>
        <SwitchersBar />
        <Button
          element={TypeElement.BUTTON}
          theme={ThemeButton.PRIMARY}
          onClick={() => dispatch(showModal({ type: TypeModal.ERROR }))}
        >
          {t('general_actions:start')}
        </Button>
        <FormControl
          id="field-sex"
          label="Номер телефона"
        >
          <Textarea id="field-sex" />
        </FormControl>
      </div>
      {isOpened && <>{renderModal()}</>}
    </>
  );
};
