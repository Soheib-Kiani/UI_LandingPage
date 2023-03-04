import Header from '../../components/header';
import Main from '../../components/main';
import Card from '../../components/card';
import Description from '../../components/description';

export default function Home() {
  return (
    <div className="font-MonserratFont max-w-7xl mx-auto">
      <Header />
      <Main />
      <Card />
      <Description />
    </div>
  );
}
