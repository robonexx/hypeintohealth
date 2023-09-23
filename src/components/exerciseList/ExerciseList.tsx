import React, { useState } from 'react';
import { exercises, intermediateExercises, advancedExercises } from '../../assets/data/ExerciseData';
import ExerciseCard from '../exercisecard/ExerciseCard';
import Button from '../button/Button';

interface Exercise {
  id: number;
  name: string;
  description: string;
}

const ExerciseList: React.FC = () => {
  const [currentExercises, setCurrentExercises] = useState<Exercise[]>(exercises);

  const handleButtonClick = (buttonType: 'beginner' | 'intermediate' | 'advanced') => {
    switch (buttonType) {
      case 'beginner':
        setCurrentExercises(exercises);
        break;
      case 'intermediate':
        setCurrentExercises(intermediateExercises);
        break;
      case 'advanced':
        setCurrentExercises(advancedExercises);
        break;
      default:
        setCurrentExercises([]);
    }
  };

  return (
    <div className='container mx-auto px-4 p-10'>
      <h4 className='text-2xl md:text-3xl text-gray-800 font-bold mb-3 text-center'>
        Exercises
      </h4>
      <section className='w-full mx-auto flex flex-col md:flex-row items-center justify-center'>
        <Button title='Beginner' onClick={() => handleButtonClick('beginner')} />
        <Button title='Intermediate' onClick={() => handleButtonClick('intermediate')} />
        <Button title='Advanced' onClick={() => handleButtonClick('advanced')} />
      </section>
      <p className='text-gray-600 mb-8 text-center'>
        Your proposed exercises for the week
      </p>
      <div className='flex items-center flex-wrap mb-20'>
        <ul className='w-full md:w-2/3 md:mx-auto lg:w-3/5'>
          {currentExercises.map((exercise: Exercise) => (
            <li key={exercise.id}>
              <ExerciseCard
                name={exercise.name}
                description={exercise.description}
                id={exercise.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExerciseList;
