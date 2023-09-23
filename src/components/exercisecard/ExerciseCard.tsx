import React, { useState, useEffect, useRef } from 'react';

interface ExerciseCardProps {
  name: string;
  description: string;
  id: number;
}

/* 
Intermediate routine
If you’ve mastered the beginner routine, you’re ready to take on these intermediate moves.

Complete 2 sets of 10 to 15 reps of each exercise below, then move on to the next after 1 minute of rest.

An alternative, more advanced approach is to complete timed rounds. For instance, complete 1 minute of each exercise and repeat the circuit twice.

Compete against yourself to get just 1 or 2 more reps each time you complete the routine.
*/

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
