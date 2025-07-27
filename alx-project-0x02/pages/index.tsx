import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 02</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to ALX Project 02 🚀</h1>
        <p className="text-lg mt-4">Next.js + TypeScript + Tailwind CSS</p>
      </main>
    </>
  );
}
