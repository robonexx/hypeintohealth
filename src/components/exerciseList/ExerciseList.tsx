import React, { useState, useEffect } from 'react';
import {
  exercises,
  intermediateExercises,
  advancedExercises,
  dumbbellExercises,
} from '../../assets/data/ExerciseData';
import ExerciseCard from '../exercisecard/ExerciseCard';
import Button from '../button/Button';

interface Exercise {
  id: number;
  name: string;
  description: string;
}

const ExerciseList: React.FC = () => {
  const [currentExercises, setCurrentExercises] =
    useState<Exercise[]>(exercises);

  const [myExercises, setMyExercises] = useState<Exercise[]>([]);

  const handleButtonClick = (
    buttonType: 'beginner' | 'intermediate' | 'advanced' | 'dumbbell' | 'myOwn'
  ) => {
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
      case 'dumbbell':
        setCurrentExercises(dumbbellExercises);
        break;
      case 'myOwn':
        setCurrentExercises(myExercises);
        break;
      default:
        setCurrentExercises([]);
    }
  };

  useEffect(() => {
    const storedMyExercises = localStorage.getItem('myExercises');
    if (storedMyExercises) {
      setMyExercises(JSON.parse(storedMyExercises));
    } else {
      setMyExercises([]);
    }
  }, []);

  return (
    <div className='container mx-auto px-4 p-10'>
      <h4 className='text-2xl md:text-3xl text-gray-800 font-bold mb-3 text-center'>
        Exercises
      </h4>
      <section className='w-full mx-auto flex flex-wrap md:flex-row items-center justify-around md:justify-center'>
        <Button
          title='Beginner'
          onClick={() => handleButtonClick('beginner')}
        />
        <Button
          title='Intermediate'
          onClick={() => handleButtonClick('intermediate')}
        />
        <Button
          title='Advanced'
          onClick={() => handleButtonClick('advanced')}
        />
        <Button
          title='Dumbbell'
          onClick={() => handleButtonClick('dumbbell')}
        />
        <Button title='My Own' onClick={() => handleButtonClick('myOwn')} />
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
