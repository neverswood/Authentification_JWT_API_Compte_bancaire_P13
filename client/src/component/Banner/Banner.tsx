import { ReactNode } from 'react';
import './Banner.scss';

export function Banner({
  src,
  children,
}: {
  src: string;
  children: ReactNode;
}) {
  return (
    <div className="hero">
      <img className="hero__banner" src={src} alt="banner"></img>
      {children}
    </div>
  );
}
