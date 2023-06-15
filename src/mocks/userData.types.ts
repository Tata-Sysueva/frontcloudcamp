export type SocialLinksType = {
  telegram: string;
  gitHub: string;
  resume: string;
};

export type UserDataType = {
  avatar: string;
  name: string;
  tel: string;
  email: string;
  socialLinks: SocialLinksType;
  sex: 'man' | 'woman';
};
