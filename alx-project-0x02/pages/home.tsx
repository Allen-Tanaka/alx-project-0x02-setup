import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - ALX Project 02</title>
      </Head>
      <Header />
      <main className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">🏡 Home Page</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          <Card title="ALX" content="This is a dynamic card component." />
          <Card title="Reusable UI" content="Easily drop it anywhere in your project!" />
          <Card title="Next.js + Tailwind" content="Fully typed and responsive." />
        </div>
      </main>
    </>
  );
}
