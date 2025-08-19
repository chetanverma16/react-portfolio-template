import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={`container mt-10 mx-auto relative`}>
      <Head>
        <title>Chetan Verma</title>
      </Head>
      <div className="mb-10">
        <Header />
        <Footer />
      </div>
    </div>
  );
}
