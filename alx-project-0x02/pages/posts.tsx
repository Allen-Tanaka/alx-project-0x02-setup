import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

export default function Posts({ posts }: PostsPageProps) {
  return (
    <>
      <Head>
        <title>Posts - ALX Project 02</title>
      </Head>
      <Header />
      <main className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">📝 Posts</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9');
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}
