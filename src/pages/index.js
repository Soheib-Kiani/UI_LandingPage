import Header from '../../components/header';
import Main from '../../components/main';
import Card from '../../components/card';
import Description from '../../components/description';
import Download from '../../components/download';
import Quoate from '../../components/quote';
import Footer from '../../components/footer';

export default function Home() {
  return (
    <div className="font-MonserratFont max-w-7xl mx-auto">
      <Header />
      <Main />
      <Card />
      <Description />
      <Download />
      <Quoate />
      <Footer />

    </div>
  );
}
