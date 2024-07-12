import { ComponentPropsWithoutRef } from 'react';
import cl from './btn.module.scss';

interface IBtn extends ComponentPropsWithoutRef<'button'> {
  dynamicColor?: IBtnColors;
}
interface IBtnColors {
  text?: string;
  bg?: string;
}

const Btn = ({ dynamicColor, ...rest }: IBtn) => {
  const inlineStyle = dynamicColor ? { color: dynamicColor.text, backgroundColor: dynamicColor.bg } : {};

  return (
    <button className={cl.button} type="button" {...rest} style={inlineStyle}>
      Подробнее
    </button>
  );
};

export default Btn;
