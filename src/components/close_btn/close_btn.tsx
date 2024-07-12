import React from 'react';
import cl from './close_btn.module.scss';

type ButtonProps = React.JSX.IntrinsicElements['button'];

const CloseBtn = (props: ButtonProps) => {
  return (
    <button className={cl.closeBtn} type="button" {...props}>
      <span></span>
      <span></span>
    </button>
  );
};

export default CloseBtn;
