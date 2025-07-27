import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - ALX Project 02</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-semibold text-blue-700">🏡 Home Page</h1>
        <p className="mt-4 text-gray-600">This is the home page of our Next.js project.</p>
      </main>
    </>
  );
}
