import './ButtonLink.scss';

type ButtonLinkType = {
  path: string;
  text: string;
};

export function ButtonLink({ path, text }: ButtonLinkType) {
  return (
    <a href={path} className="sign-in-button">
      {text}
    </a>
  );
}
