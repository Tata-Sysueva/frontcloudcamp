export const UserSex = ['man', 'woman'] as const;

export const Patterns = {
  PhoneNumber: /^(?<code>[+])?[-., ()\d]*$/,
  Email: /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  Nickname: /^[A-Za-z0-9]+$/,
  Name: /^[A-Za-z]+$/
};

interface CheckboxDescriptionsType {
  field1: string | null;
  field2: string | null;
  field3: string | null;
}

export const checkboxDescriptions: CheckboxDescriptionsType = {
  field1: '1',
  field2: '2',
  field3: '3'
};
