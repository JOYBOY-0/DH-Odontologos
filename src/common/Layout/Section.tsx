import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  wrapperClassName?: string;
  separatorBoth?: boolean;
  separatorBottom?: boolean;
  separatorTop?: boolean;
  gradientBotttom?: boolean;
};

const Section = (props: ISectionProps) => (
  <div className={`w-full overflow-hidden font-primary relative ${props.wrapperClassName}`}>
    {(props.separatorTop || props.separatorBoth) &&
      <span 
      className=' absolute top-0 left-0 w-full h-1 z-0
      bg-gradient-to-r from-orange-400/20 to-orange-500' 
    />}
    {(props.separatorBottom || props.separatorBoth) &&
      <span 
        className=' absolute bottom-0 left-0 w-full h-1 z-0
        bg-gradient-to-r from-orange-400/20 to-orange-500' 
    />}
    {props.gradientBotttom &&
      <span 
      className=' absolute bottom-0 left-0 w-full h-56 z-0
      bg-gradient-to-t from-orange-500/70 to-orange-600/0 opacity-40' 
    />
    }

  <div
    id={props.id}
    className={`w-full max-w-screen-xl mx-auto px-4 ${
      props.yPadding ? props.yPadding : 'py-16'
    } ${props.className}`}
  >
    {props.children}
  </div>
  </div>
);

export { Section };
