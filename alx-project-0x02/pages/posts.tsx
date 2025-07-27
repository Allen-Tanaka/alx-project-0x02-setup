import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts - ALX Project 02</title>
      </Head>
      <Header />
      <main className="min-h-screen p-6 bg-white">
        <h1 className="text-3xl font-bold text-purple-700">📝 Posts Page</h1>
        <p className="mt-4 text-gray-600">This is where your list of posts will appear.</p>
      </main>
    </>
  );
}
