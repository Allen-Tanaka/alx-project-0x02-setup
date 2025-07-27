import Head from 'next/head';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

export default function About() {
  return (
    <>
      <Head>
        <title>About - ALX Project 02</title>
      </Head>
      <Header />
      <main className="min-h-screen p-6 bg-white text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-6">📘 About Page</h1>
        <p className="text-gray-600 mb-8">Reusable buttons with different sizes and shapes:</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button label="Small" size="small" shape="rounded-sm" />
          <Button label="Medium" size="medium" shape="rounded-md" />
          <Button label="Large" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
