import React, { ChangeEventHandler } from 'react';

type InputType = {
  inputName: string;
  labelFor: string;
  labelText: string;
  type: string;
  id: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export function InputCheckbox({
  inputName,
  labelFor,
  labelText,
  type,
  id,
  checked,
  onChange,
}: InputType) {
  return (
    <React.Fragment>
      <div className={inputName}>
        <input type={type} id={id} checked={checked} onChange={onChange} />
        <label htmlFor={labelFor}>{labelText}</label>
      </div>
    </React.Fragment>
  );
}
