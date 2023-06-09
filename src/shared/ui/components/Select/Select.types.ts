export type Variants = 'light' | 'dark';

export type VariantStyle = {
  control: {
    color: string;
    backgroundColor: string;
    borderColor: string;
    borderColorHover: string;
  };
  singleValue: {
    color: string;
  };
  placeholder: {
    color: string;
  };
  option: {
    color: string;
    colorDisabled: string;
  };
  menu: {
    backgroundColor: string;
  };
};
