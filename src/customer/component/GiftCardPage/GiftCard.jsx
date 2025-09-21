import React from 'react';
import { giftCard } from '../Product/GiftCard';
import { Link } from 'react-router-dom';

const GiftCard = () => {
  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-bold text-white mb-6">Gift Cards</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {
        giftCard.map((card, index) => (
          <div key={index} className="rounded-2xl shadow-lg hover:shadow-2xl transform bg-boxbg
           hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
            <Link to={`/${card.title}`}>
              <div className=" flex items-center justify-center">
                <img
                  src={card.img}
                  alt={card.productTitle}
                  className="max-h-full object-contain p-4" />
              </div>
              <div className=" text-center pb-3">
                <p className="text-white font-semibold text-lg truncate">{card.productTitle}</p>
                <p className="text-gray-400 text-sm mt-1">{card.price}</p>
                
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftCard;
