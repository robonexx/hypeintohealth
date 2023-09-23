import React from 'react';
import  { exercises } from '../../assets/data/ExerciseData';
import ExerciseCard from '../exercisecard/ExerciseCard';

interface Exercise {
    id: number;
    name: string;
    description: string;
}

const ExerciseList: React.FC = () => {
  return (
    <div className='container mx-auto px-6 p-10'>
      <h4 className='text-3xl text-gray-800 font-bold mb-3'>Exercises</h4>
      <p className='text-gray-600 mb-8'>Your proposed exercises for the week</p>
      <div className='flex items-center flex-wrap mb-20'>
        <ul className='w-full md:w-2/3 md:mx-auto lg:w-3/5'>
          {exercises.map((exercise: Exercise) => (
              <li key={exercise.id}>
                  <ExerciseCard name={exercise.name} description={exercise.description} id={exercise.id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExerciseList;
