import { type CardProps } from '@/interfaces';

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 max-w-md">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}
