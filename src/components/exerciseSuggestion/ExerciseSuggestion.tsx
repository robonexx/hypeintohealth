import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { getRandomExercises } from '../../utils/shuffleExercises';
import {
  exercises,
  intermediateExercises,
  advancedExercises,
  dumbbellExercises,
  Exercise,
} from '../../assets/data/ExerciseData';
import ExerciseCard from '../exercisecard/ExerciseCard';

const ExerciseSuggestion: React.FC = () => {
  const [number, setNumber] = useState<number | undefined>(undefined);
  const [randomList, setRandomList] = useState<Exercise[]>([]);
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);
  const [myExercises, setMyExercises] = useState<Exercise[]>([]);

  console.log(myExercises.length);
  const handleButtonClick = (
    buttonType: 'beginner' | 'intermediate' | 'advanced' | 'dumbbell' | 'myOwn'
  ) => {
    const newArray = getExerciseArray(buttonType);
    if (isSelected(buttonType)) {
      setSelectedExercises((prevSelected) =>
        prevSelected.filter((exercise) => !newArray.includes(exercise))
      );
    } else {
      setSelectedExercises((prevSelected) => [...prevSelected, ...newArray]);
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

  // switch to check the button and add to exercise array
  const getExerciseArray = (buttonType: string): Exercise[] => {
    switch (buttonType) {
      case 'beginner':
        return exercises;
      case 'intermediate':
        return intermediateExercises;
      case 'advanced':
        return advancedExercises;
      case 'dumbbell':
        return dumbbellExercises;
      case 'myOwn':
        return myExercises;
      default:
        return [];
    }
  };

  // checking if button is selected
  const isSelected = (buttonType: string) => {
    return selectedExercises.some((exercise) =>
      getExerciseArray(buttonType).includes(exercise)
    );
  };

  // handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const parsedNumber = parseFloat(inputValue);

    if (!isNaN(parsedNumber)) {
      setNumber(parsedNumber);
    } else {
      setNumber(undefined);
    }
  };

  // handle submit and pushing to the randomList that will show up as the exercises routine
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (number !== undefined) {
      const newRandomList = getRandomExercises(number, selectedExercises);
      setRandomList(newRandomList);
    } else {
      console.log('Invalid number. Submission canceled.');
    }
  };

  return (
    <section className='container mx-auto px-6 p-10 lg:px-40'>
      <h4 className='text-2xl lg:text-3xl text-gray-800 font-bold mb-3'>
        Create a random training program
      </h4>
      <p className='mb-20'>
        Choose from the different lists of exercises, then add the number of
        exercises you want to have & it will be randomly picked from the
        selected options. If you want new exercises you can submit with the
        choices you already have, or select a new set of exercises. You can mix
        and match between beginner, intermediate, advanced and dumbell.
      </p>
      <form onSubmit={handleSubmit} className='flex flex-col px-8'>
        <section className='w-full mb-4 mx-auto flex flex-wrap md:flex-row items-center justify-center md:justify-evenly'>
          <button
            className={`${
              isSelected('beginner') ? 'bg-green-400' : 'bg-blue-500'
            } hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-3/5 md:w-1/3`}
            onClick={() => handleButtonClick('beginner')}
          >
            Beginner
          </button>
          <button
            className={`${
              isSelected('intermediate') ? 'bg-green-400' : 'bg-blue-500'
            } hover:bg-blue-700 text-white font-bold m-2 py-2 px-2 rounded w-3/5 md:w-1/3 `}
            onClick={() => handleButtonClick('intermediate')}
          >
            Intermediate
          </button>
          <button
            className={`${
              isSelected('advanced') ? 'bg-green-400' : 'bg-blue-500'
            } hover:bg-blue-700 text-white font-bold m-2 py-2 px-2 rounded w-3/5 md:w-1/3 `}
            onClick={() => handleButtonClick('advanced')}
          >
            Advanced
          </button>
          <button
            className={`${
              isSelected('dumbbell') ? 'bg-green-400' : 'bg-blue-500'
            } hover:bg-blue-700 text-white font-bold m-2 py-2 px-2 rounded w-3/5 md:w-1/3`}
            onClick={() => handleButtonClick('dumbbell')}
          >
            Dumbbell
          </button>
          <button
            className={`${
              isSelected('myOwn') ? 'bg-green-400' : 'bg-blue-500'
            } hover:bg-blue-700 text-white font-bold m-2 py-2 px-2 rounded w-3/5 md:w-1/3 disabled:bg-gray-600`}
            onClick={() => handleButtonClick('myOwn')}
            disabled={myExercises.length === 0 ? true : false}
          >
            {myExercises.length === 0 ? 'no own exercises yet' : 'My Own'}
          </button>
          <p></p>
        </section>
        <input
          className='my-2 rounded-sm px-1 w-fit h-fit self-center'
          type='text'
          placeholder='Add number of exercises'
          value={number}
          onChange={handleInputChange}
        />
        <p className='text-center text-red-900'>{selectedExercises.length > (number || 0) ? `number cant be higher than ${selectedExercises.length}` : ``}</p>

        <button
          type='submit'
          title='Submit'
          className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mx-8 my-4 w-2/3 md:w-32 self-center'
        >
          Submit
        </button>
      </form>
      <h2 className='mt-16 mb-4 py-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent drop-shadow-md font-extrabold body-font font-black text-2xl md:text-3xl lg:text-5xl'>
        Your Routine / training program 🦾
      </h2>

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
      <p className='text-gray-600 font-semibold text-base'>
        We suggest you do timed sets, 45sec / exercise (do as many as you can in
        the during the 45sec) x 2-4 times in routine program intervals, but hey
        if only 1 time / exercise - remember thats fine 😃
      </p>
    </section>
  );
};

export default ExerciseSuggestion;

/* 
I tried it with use Refs but I dident get it right... will remove this code later, some stuff i wanna look thru


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
  const [selectedArrays, setSelectedArrays] = useState<Exercise[][]>([]);
  const [randomList, setRandomList] = useState<Exercise[]>([]);

  const handleButtonClick = (
    buttonType: 'beginner' | 'intermediate' | 'advanced' | 'dumbbell'
  ) => {
    let newArray: Exercise[] = [];

    switch (buttonType) {
      case 'beginner':
        newArray = exercises;
        break;
      case 'intermediate':
        newArray = dumbbellExercises;
        break;
      case 'advanced':
        newArray = intermediateExercises;
        break;
      case 'dumbbell':
        newArray = advancedExercises;
        break;
      default:
        break;
    }

    // Toggle the selected array
    if (selectedArrays.some((arr) => arr === newArray)) {
      setSelectedArrays(selectedArrays.filter((arr) => arr !== newArray));
    } else {
      setSelectedArrays([...selectedArrays, newArray]);
    }
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
      const combinedArrays = ([] as Exercise[]).concat(...selectedArrays);
      const newRandomList = getRandomExercises(number, combinedArrays);
      setRandomList(newRandomList);
    } else {
      console.log('Invalid number. Submission canceled.');
    }
  };

  return (
    <section className='container mx-auto px-6 p-10 lg:px-40'>
      <p>
        This will be where you can choose from different lists of exercises, and
        the number of exercises will be randomly picked from the selected
        arrays.
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
            onClick={() => handleButtonClick('beginner')}
            selected={selectedArrays.some((arr) => arr === exercises)}
          />
          <Button
            title='Intermediate'
            onClick={() => handleButtonClick('intermediate')}
            selected={selectedArrays.some((arr) => arr === dumbbellExercises)}
          />
          <Button
            title='Advanced'
            onClick={() => handleButtonClick('advanced')}
            selected={selectedArrays.some(
              (arr) => arr === intermediateExercises
            )}
          />
          <Button
            title='Dumbbell'
            onClick={() => handleButtonClick('dumbbell')}
            selected={selectedArrays.some((arr) => arr === advancedExercises)}
          />
          <button
            type='submit'
            title='Submit'
            className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-8 my-4 w-2/3 md:w-32 self-center'
          >
            Submit
          </button>
        </section>
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


*/
