// components/Card.jsx
import React from 'react';
import Button from './Button';

export default function Card({
  image = '',
  title = '',
  buttonText = 'Click Me',
  onButtonClick = () => {},
  buttonType = 'button',
  className = ''
}) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-4 flex flex-col items-center ${className}`}>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-md mb-4"
        />
      )}
      {title && (
        <h2 className="text-lg font-bold text-center text-gray-800 mb-6">
          {title}
        </h2>
      )}
      <Button
        text={buttonText}
        onClick={onButtonClick}
        type={buttonType}
        className="mt-auto"
      />
    </div>
  );
}
