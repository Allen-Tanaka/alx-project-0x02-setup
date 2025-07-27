import { PostProps } from '../../interfaces';

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-blue-700 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm mb-2">{body}</p>
      <p className="text-xs text-gray-500">Posted by User #{userId}</p>
    </div>
  );
}
