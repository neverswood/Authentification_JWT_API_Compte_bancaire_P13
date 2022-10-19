import React, { ChangeEventHandler } from 'react';

type InputType = {
  inputName: string;
  labelFor: string;
  labelText: string;
  type: string;
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export function Input({
  inputName,
  labelFor,
  labelText,
  type,
  id,
  value,
  onChange,
}: InputType) {
  return (
    <React.Fragment>
      <div className={inputName}>
        <label htmlFor={labelFor}>{labelText}</label>
        <input type={type} id={id} value={value} onChange={onChange} />
      </div>
    </React.Fragment>
  );
}
