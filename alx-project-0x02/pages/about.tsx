import Head from 'next/head';
import Header from '../components/layout/Header';

export default function About() {
  return (
    <>
      <Head>
        <title>About - ALX Project 02</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-semibold text-green-700">📘 About Page</h1>
        <p className="mt-4 text-gray-600">This is the about page of our ALX Project.</p>
      </main>
    </>
  );
}
