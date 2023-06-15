import { type StylesConfig } from 'react-select';

import { type VariantStyle, type Variants } from './Select.types';

const VARIANTS: { [key in Variants]: VariantStyle } = {
  light: {
    control: {
      color: '#333333',
      backgroundColor: '#ffffff',
      borderColor: 'rgb(0 0 0 / 16%)',
      borderColorHover: 'rgb(0 0 0 / 48%)'
    },

    singleValue: {
      color: '#333333'
    },

    placeholder: {
      color: 'rgb(0 0 0 / 48%)'
    },

    menu: {
      backgroundColor: '#ffffff'
    },

    option: {
      color: '#333333',
      colorDisabled: '#cccccc'
    }
  },

  // My secondary variant is for a light theme.
  dark: {
    control: {
      color: '#ffffff',
      backgroundColor: '#3d3d3d',
      borderColor: 'rgb(0 0 0 / 16%)',
      borderColorHover: 'rgb(0 0 0 / 8%)'
    },

    singleValue: {
      color: '#ffffff'
    },

    placeholder: {
      color: '#ffffff'
    },

    menu: {
      backgroundColor: '#3d3d3d'
    },

    option: {
      color: '#ffffff',
      colorDisabled: 'rgb(0 0 0 / 8%)'
    }
  }
};

export const selectStyles = (
  variant: Variants = 'light'
): StylesConfig<unknown, false> => {
  const style = VARIANTS[variant];

  return {
    control: (styles, { isDisabled }) => ({
      ...styles,
      width: '100%',
      minHeight: '44px',
      padding: '12px',
      color: style.control.color,
      backgroundColor: style.control.backgroundColor,
      border: `1px solid ${style.control.borderColor}`,
      borderRadius: '4px',
      boxShadow: 'none',

      ':hover': {
        ...styles[':hover'],
        borderColor: !isDisabled
          ? style.control.borderColorHover
          : style.control.borderColor
      }
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: 0
    }),
    placeholder: (styles) => ({
      ...styles,
      margin: 0,
      color: style.placeholder.color
    }),
    singleValue: (styles) => ({
      ...styles,
      color: style.singleValue.color
    }),
    input: (styles) => ({
      ...styles,
      padding: 0,
      margin: 0
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: 'none'
    }),
    indicatorsContainer: (styles) => ({
      ...styles,
      div: {
        ...styles,
        padding: 0
      }
    }),
    menu: (styles) => ({
      ...styles,
      margin: 0,
      paddingTop: '4px',
      paddingBottom: '4px',
      backgroundColor: style.menu.backgroundColor,
      boxShadow: '0px 4px 20px rgba(0 0 0 / 8%)',
      borderRadius: '4px'
    }),
    option: (styles, { isDisabled, isSelected }) => ({
      ...styles,
      padding: '8px 12px',
      color: isDisabled ? style.option.colorDisabled : style.option.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      backgroundColor: 'transparent',

      ':hover': {
        ...styles[':hover'],
        backgroundColor: 'rgb(121 0 235 / 30%)'
      },

      ':active': {
        ...styles[':active'],
        // eslint-disable-next-line no-nested-ternary -- Allow in this file
        backgroundColor: !isDisabled
          ? isSelected
            ? '#7900eb'
            : '#d5e4f7'
          : undefined
      }
    })
  };
};
