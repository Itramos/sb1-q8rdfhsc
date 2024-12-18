import React from 'react';
import { GIFT_MESSAGES } from '../constants/messages';
import { MessageBlock } from './MessageBlock';

interface GiftContentProps {
  isOpen: boolean;
}

export const GiftContent: React.FC<GiftContentProps> = ({ isOpen }) => {
  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full transition-all duration-1000 ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}
    >
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-pink-500 animate-bounce">
          {GIFT_MESSAGES.GREETING}
        </h1>
        <div className="space-y-6">
          <MessageBlock variant="primary">{GIFT_MESSAGES.THANK_YOU}</MessageBlock>
          <MessageBlock variant="secondary">{GIFT_MESSAGES.LEARNING}</MessageBlock>
          <MessageBlock variant="primary">{GIFT_MESSAGES.APPRECIATION}</MessageBlock>
          <MessageBlock variant="highlight">{GIFT_MESSAGES.FAREWELL}</MessageBlock>
        </div>
      </div>
    </div>
  );
}