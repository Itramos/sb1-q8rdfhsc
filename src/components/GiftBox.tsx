import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import { GiftContent } from './GiftContent';
import { GIFT_MESSAGES } from '../constants/messages';

export const GiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className={`transform transition-all duration-1000 cursor-pointer ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative">
          {/* Gift Box Lid */}
          <div className="w-48 h-20 bg-pink-500 rounded-t-lg transform-origin-bottom animate-float">
            <div className="absolute top-2 left-1/2 -translate-x-1/2">
              <div className="w-8 h-8 bg-pink-300 rounded-full flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          {/* Gift Box Body */}
          <div className="w-48 h-48 bg-pink-400 rounded-b-lg">
            {/* Ribbon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-pink-300" />
          </div>
        </div>
        <div className="mt-4 text-center text-gray-600">
          {GIFT_MESSAGES.CLICK_TO_OPEN}
        </div>
      </div>

      <GiftContent isOpen={isOpen} />
    </div>
  );
};