import { type AdvantagesType } from 'app/types/redux';

export type SocialLinksType = {
  telegram: string;
  gitHub: string;
  resume: string;
};

export type UserDataType = {
  about: string | null;
  avatar: string | null;
  nickname: string | null;
  name: string | null;
  fullname: string;
  surname: string | null;
  tel: string | null;
  email: string | null;
  socialLinks: SocialLinksType;
  sex: {
    value: 'man' | 'woman';
    label: string;
  } | null;
  advantages: AdvantagesType[] | null;
  radio: number | string | null;
  checkboxes: number[] | string[] | null;
};
