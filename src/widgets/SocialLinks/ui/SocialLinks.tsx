import upperFirst from 'lodash/upperFirst';
import { type SocialLinksType } from 'mocks/userData.types';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './SocialLinks.module.scss';

export const SocialLinks = ({
  socialLinks,
  className = ''
}: {
  socialLinks: SocialLinksType;
  className?: string;
}) => (
  <nav className={classNames(cls.socialLinksWrapper, {}, [cls[className]])}>
    {(Object.keys(socialLinks) as (keyof SocialLinksType)[]).map((link) => (
      <a
        key={link}
        className={cls.socialLinks}
        href={socialLinks[link]}
      >
        {upperFirst(link)}
      </a>
    ))}
  </nav>
);
