import React from 'react';

type InputType = {
  inputName: string;
  labelFor: string;
  labelText: string;
  type: string;
  id: string;
};

export function Input({ inputName, labelFor, labelText, type, id }: InputType) {
  return (
    <React.Fragment>
      {type === 'checkbox' ? (
        <div className={inputName}>
          <input type={type} id={id} />
          <label htmlFor={labelFor}>{labelText}</label>
        </div>
      ) : (
        <div className={inputName}>
          <label htmlFor={labelFor}>{labelText}</label>
          <input type={type} id={id} />
        </div>
      )}
    </React.Fragment>
  );
}
