declare module '*.module.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import type React from 'react';

  export const ReactComponent: React.VFC<React.SVGProps<SVGSVGElement>>;
}

// eslint-disable-next-line @typescript-eslint/naming-convention -- It's necessary for global types
declare const __IS_DEV__: boolean;
