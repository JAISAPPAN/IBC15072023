'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface Card {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const cardData: Card[] = [
  {
    id: 1,
    title: 'Blockchain',
    description: 'This is the description for Card 1.',
    imageUrl: '/images/1.jpg',
  },
  {
    id: 2,
    title: 'NFT',
    description: 'This is the description for Card 2.',
    imageUrl: '/images/2.jpg',
  },
  {
    id: 3,
    title: 'Bitcoin',
    description: 'This is the description for Card 3.',
    imageUrl: '/images/3.jpg',
  },
  {
    id: 4,
    title: 'Ethereum',
    description: 'This is the description for Card 4.',
    imageUrl: '/images/4.jpg',
  },
  {
    id: 5,
    title: 'Cordana',
    description: 'This is the description for Card 5.',
    imageUrl: '/images/5.jpg',
  },
  {
    id: 6,
    title: 'Algorand',
    description: 'This is the description for Card 6.',
    imageUrl: '/images/6.jpg',
  },
  {
    id: 1,
    title: 'Solana',
    description: 'This is the description for Card 1.',
    imageUrl: '/images/7.webp',
  },
  {
    id: 2,
    title: 'XDC',
    description: 'This is the description for Card 2.',
    imageUrl: '/images/8.webp',
  },
  {
    id: 3,
    title: 'Fantom',
    description: 'This is the description for Card 3.',
    imageUrl: '/images/9.webp',
  },
  {
    id: 4,
    title: 'Polkadot',
    description: 'This is the description for Card 4.',
    imageUrl: '/images/10.webp',
  },
  {
    id: 5,
    title: 'Casper',
    description: 'This is the description for Card 5.',
    imageUrl: '/images/11.webp',
  },
  {
    id: 6,
    title: 'Oasis',
    description: 'This is the description for Card 6.',
    imageUrl: '/images/12.webp',
  },
  {
    id: 1,
    title: 'Cosmos',
    description: 'This is the description for Card 1.',
    imageUrl: '/images/13.jpg',
  },
  {
    id: 2,
    title: 'Kusama',
    description: 'This is the description for Card 2.',
    imageUrl: '/images/14.webp',
  },
  {
    id: 3,
    title: 'Avalanche',
    description: 'This is the description for Card 3.',
    imageUrl: '/images/15.png',
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'This is the description for Card 4.',
    imageUrl: '/images/16.webp',
  },
  {
    id: 5,
    title: 'Card 5',
    description: 'This is the description for Card 5.',
    imageUrl: '/images/17.webp',
  },
  {
    id: 6,
    title: 'Card 6',
    description: 'This is the description for Card 6.',
    imageUrl: '/images/18.webp',
  },
];

const ITEMS_PER_PAGE = 6;
const ITEMS_PER_ROW = 3;
const TOTAL_PAGES = Math.ceil(cardData.length / ITEMS_PER_PAGE);

const CardComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = cardData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">We Teach Blockchain Technology</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentItems.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-lg p-4"
          >
            <Image
              className="w-full h-40 object-cover rounded-md mb-4"
              src={card.imageUrl}
              alt={card.title}
            />
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: TOTAL_PAGES }, (_, index) => (
          <button
            key={index + 1}
            className={`mx-1 px-2 py-1 rounded-full ${
              index + 1 === currentPage
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;

