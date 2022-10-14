import './Banner.scss';

type BannerType = {
  condition: any;
  src: string;
};

export function Banner({ condition, src }: BannerType) {
  return (
    <div className="hero">
      <img className="hero__banner" src={src} alt="banner"></img>
      {condition}
    </div>
  );
}
