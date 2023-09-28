import React, { useState, ChangeEvent, FormEvent } from 'react';
import { getRandomExercises } from '../../utils/shuffleExercises';
import {
  exercises,
  intermediateExercises,
  advancedExercises,
  dumbbellExercises,
  Exercise,
} from '../../assets/data/ExerciseData';
import ExerciseCard from '../exercisecard/ExerciseCard';
import Button from '../button/Button';

const ExerciseSuggestion: React.FC = () => {
  const [number, setNumber] = useState<number | undefined>(undefined);
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);
  const [randomList, setRandomList] = useState<Exercise[]>([]);

  const handleButtonClick = (exercisesToAdd: Exercise[]) => {
    // Add the selected exercises to selectedExercises
    setSelectedExercises([...selectedExercises, ...exercisesToAdd]);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const parsedNumber = parseFloat(inputValue);

    if (!isNaN(parsedNumber)) {
      setNumber(parsedNumber);
    } else {
      setNumber(undefined);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (number !== undefined) {
      setRandomList(getRandomExercises(number, selectedExercises));
    } else {
      console.log('Invalid number. Submission canceled.');
    }
  };

  return (
    <section className='container mx-auto px-6 p-10 lg:px-40'>
      <p>
        This will be where you can choose from different lists of exercises, and the number of exercises will be randomly picked from the selected arrays.
      </p>
      <form onSubmit={handleSubmit} className='flex flex-col md:flex-row px-8'>
        <input
          className='my-2 rounded-sm px-1 w-fit h-fit self-center'
          type='text'
          placeholder='Add number of exercises'
          value={number}
          onChange={handleInputChange}
        />
        <section className='w-full mx-auto flex flex-wrap md:flex-row items-center justify-around md:justify-center'>
          <Button
            title='Beginner'
            onClick={() => handleButtonClick(exercises)}
            selected={selectedExercises.some((exercise) =>
              exercises.includes(exercise)
            )}
          />
          <Button
            title='Intermediate'
            onClick={() => handleButtonClick(dumbbellExercises)}
            selected={selectedExercises.some((exercise) =>
              dumbbellExercises.includes(exercise)
            )}
          />
          <Button
            title='Advanced'
            onClick={() => handleButtonClick(intermediateExercises)}
            selected={selectedExercises.some((exercise) =>
              intermediateExercises.includes(exercise)
            )}
          />
          <Button
            title='Dumbbell'
            onClick={() => handleButtonClick(advancedExercises)}
            selected={selectedExercises.some((exercise) =>
              advancedExercises.includes(exercise)
            )}
          />
              </section>
              <button
            type='submit'
            title='Submit'
            className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-8 my-4 w-2/3 md:w-32 self-center'
          >
            Submit
          </button>
      </form>
      <ul>
        {randomList.map((exercise: Exercise) => (
          <ExerciseCard
            key={exercise.id}
            name={exercise.name}
            description={exercise.description}
            id={exercise.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default ExerciseSuggestion;
