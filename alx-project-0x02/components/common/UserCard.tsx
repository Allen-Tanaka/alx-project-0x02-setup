import { UserProps } from '../../interfaces';

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-5 shadow-md">
      <h3 className="text-lg font-bold text-green-700 mb-2">{name}</h3>
      <p className="text-gray-700 text-sm mb-1">📧 {email}</p>
      <p className="text-gray-500 text-xs">
        🏡 {address.street}, {address.suite}, {address.city}
      </p>
    </div>
  );
}
