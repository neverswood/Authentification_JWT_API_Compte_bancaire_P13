import { MouseEventHandler } from 'react';

type ButtonType = {
  classButton: string;
  children: any;
  click?: MouseEventHandler<HTMLButtonElement>;
};

export function Button({ classButton, children, click }: ButtonType) {
  return (
    <button className={classButton} onClick={click}>
      {children}
    </button>
  );
}
