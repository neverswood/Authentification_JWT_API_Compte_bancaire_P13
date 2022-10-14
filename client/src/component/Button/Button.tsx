type ButtonType = {
  classButton: string;
  text: string;
};

export function Button({ classButton, text }: ButtonType) {
  return <button className={classButton}>{text}</button>;
}
