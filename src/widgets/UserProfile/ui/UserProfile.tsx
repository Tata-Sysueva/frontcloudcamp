import { type UserDataType } from 'mocks/userData.types';
import { Avatar } from 'shared/ui/components/Avatar/Avatar';
import { SocialLinks } from 'widgets/SocialLinks';

import cls from './UserProfile.module.scss';
import { firstLetters } from '../utils/utils';

export const UserProfile = ({ userData }: { userData: UserDataType }) => {
  const { avatar, name, socialLinks } = userData;

  return (
    <div className={cls.userProfileWrapper}>
      <Avatar
        src={avatar}
        initials={firstLetters(name).toUpperCase()}
      />
      <div className={cls.userInfoWrapper}>
        <h2 className={cls.userName}>{name}</h2>
        <div className={cls.socialLinksBox}>
          <SocialLinks socialLinks={socialLinks} />
        </div>
      </div>
    </div>
  );
};
