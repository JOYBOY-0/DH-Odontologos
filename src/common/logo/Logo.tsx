import { FC } from "react";

type ILogoProps = {
  size?: string;
  dark?: boolean;
  className?: string;
};

const Logo : FC<ILogoProps> = ({
  size = "md",
  dark = true,
  ...props
}) => 
{

  const basePath = `/assets/logo/`;
  const logoPaths : any = {
    light: {
      sm: 'logo_sm_light.svg',
      md: 'logo_md_light.svg',
      lg: 'logo_lg_light.svg',
      wide: 'logo_wide_light.svg',
    },
    dark: {
      sm: 'logo_sm_dark.svg',
      md: 'logo_md_dark.svg',
      lg: 'logo_lg_dark.svg',
      wide: 'logo_wide_dark.svg',

    }
  }
  function getLogoPath(){ return `${ basePath + logoPaths[dark ? 'dark' : 'light'][size || 'md'] }`};
  
  return (
    <img src={getLogoPath()} alt="Industrias Khan" className={props.className} />
  );
};

export { Logo };
