import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
  src?: string;
  className?: string;
  initials?: string;
}

export const Avatar = ({ src, className = '', initials }: AvatarProps) => {
  const [t] = useTranslation();

  return (
    <div className={cls.avatarWrapper}>
      {src ? (
        <img
          className={classNames(cls.avatarImg, {}, [cls[className]])}
          src={src}
          alt={t('general_alts:user_avatar')}
        />
      ) : (
        <div className={cls.defaultAvatar}>{initials}</div>
      )}
    </div>
  );
};
