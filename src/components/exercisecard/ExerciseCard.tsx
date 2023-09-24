import React, { useState, useEffect, useRef } from 'react';
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi'

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
    <div ref={cardRef} className='border rounded p-4 shadow-md w-full'>
      <div className='flex items-center justify-between mb-2'>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <button
          className='text-slate-200 hover:text-indigo-500 focus:outline-none text-2xl'
          onClick={toggleDescription}
        >
          {showDescription ? <FiArrowUpCircle /> : <FiArrowDownCircle />}
        </button>
      </div>
      {showDescription && <p className='text-gray-600'>{description}</p>}
    </div>
  );
};

export default ExerciseCard;
