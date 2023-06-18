import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { hideModal } from 'app/store/slices/modalSlice/modalSlice';
import { selectModalType } from 'app/store/slices/modalSlice/selectors';
import { TypeModal } from 'constants/constants';
import { Button } from 'shared/ui/components/Button/Button';
import { Modal } from 'shared/ui/components/Modal/Modal';
import { TypeElement, ThemeButton } from 'shared/ui/constants/constants';

export const FeedbackModal = () => {
  const dispatch = useAppDispatch();
  const type = useAppSelector(selectModalType);
  const navigate = useNavigate();
  const [t] = useTranslation();

  const closeModal = () => dispatch(hideModal());

  const handleCloseButtonClick = () => {
    closeModal();
    navigate(-1);
  };

  switch (type) {
    case TypeModal.Success:
      return (
        <Modal
          title={t('enums:feedback_messages.success')}
          onClose={closeModal}
        >
          <Button
            element={TypeElement.BUTTON}
            theme={ThemeButton.PRIMARY}
            onClick={handleCloseButtonClick}
          >
            {t('enums:links.to_main')}
          </Button>
        </Modal>
      );
    case TypeModal.Error:
      return (
        <Modal
          title={t('enums:feedback_messages.error')}
          isErrorModal
          onClose={closeModal}
        >
          <Button
            element={TypeElement.BUTTON}
            theme={ThemeButton.PRIMARY}
            onClick={() => dispatch(hideModal())}
          >
            {t('general_actions:close')}
          </Button>
        </Modal>
      );
    default:
      return null;
  }
};
