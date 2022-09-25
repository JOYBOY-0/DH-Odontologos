import { FC } from "react";

type ILogoProps = {
  size?: string;
  dark?: boolean;
  className?: string;
};

const Logo : FC<ILogoProps> = (props) => {

  return (
    <p className={`text-lg font-light uppercase ${props.className}`} >
      <span className="font-bold text-primary">Demo</span>
      Dentist
    </p>
  );
};

export { Logo };
