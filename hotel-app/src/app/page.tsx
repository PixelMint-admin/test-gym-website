import React from 'react';
import Link from 'next/link';

const rooms = [
  { id: 1, name: 'Standard Room', description: 'A cozy room with a queen-sized bed.' },
  { id: 2, name: 'Deluxe Room', description: 'A spacious room with a king-sized bed and a balcony.' },
  { id: 3, name: 'Suite', description: 'A luxurious suite with a separate living area.' },
];

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Hotel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div key={room.id} className="border rounded-lg p-4 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
            <p className="mb-4">{room.description}</p>
            <Link href={`/rooms/${room.id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
