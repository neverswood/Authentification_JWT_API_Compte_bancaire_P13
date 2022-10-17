import { Banner } from '../../component/Banner/Banner';
import { Features } from './Features/Features';
import { Slogan } from './Slogan/Slogan';
import tree from '../../assets/bank-tree.jpeg';
import { Header } from '../../component/Header/Header';
import { NavSignIn } from '../../component/NavSignIn/NavSignIn';

export function HomePage() {
  return (
    <body>
      <Header navigation={<NavSignIn />} />
      <main>
        <Banner condition={<HomePage /> ? <Slogan /> : null} src={tree} />
        <Features />
      </main>
    </body>
  );
}
