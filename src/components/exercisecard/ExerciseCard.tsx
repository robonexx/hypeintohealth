import React, { useState, useEffect, useRef } from 'react';

interface ExerciseCardProps {
  name: string;
  description: string;
  id: number;
}


const ExerciseCard: React.FC<ExerciseCardProps> = ({ name, description }) => {
  const [showDescription, setShowDescription] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(event.target as Node)
      ) {
        setShowDescription(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cardRef]);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div ref={cardRef} className='border rounded p-4 shadow-md'>
      <div className='flex items-center justify-between mb-2'>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <button
          className='text-blue-500 hover:text-blue-700 focus:outline-none'
          onClick={toggleDescription}
        >
          {showDescription ? 'Hide Description' : 'Show Description'}
        </button>
      </div>
      {showDescription && <p className='text-gray-600'>{description}</p>}
    </div>
  );
};

export default ExerciseCard;
