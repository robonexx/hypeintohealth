import React, { useState } from 'react';
import { PiFolderPlus } from 'react-icons/pi';
import IMGT from 'svg/tracker.svg';
import { getRandomExercises } from '../../utils/shuffleExercises';
import {
  exercises,
  intermediateExercises,
  advancedExercises,
  dumbbellExercises,
  Exercise,
} from '../../assets/data/ExerciseData';
import ExerciseCard from '../exercisecard/ExerciseCard';

// 1 create a list of all exercises
// 2 make it possible to search in the exercises
// 3 create a function so that the user can pick exercises to create their own list
// 4 output the users own training list

const ExercisePlanner: React.FC = () => {
  const [num, setNum] = useState(1);
  const [myList, setMyList] = useState([]);
  const [filtered, setFiltered] = useState([])
  const allExercises = [
    ...exercises,
    ...intermediateExercises,
    ...advancedExercises,
    ...dumbbellExercises,
  ];
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredExercises = allExercises.filter((exercise: Exercise) =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // trying if this function works
  const array1: Exercise[] = exercises;

  const array2: Exercise[] = dumbbellExercises;

  const numOfExercises = 7;

  const randomList = getRandomExercises(numOfExercises, array1, array2);

  return (
    <section className='container mx-auto px-6 p-10 lg:px-40'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-between flex-wrap mb-40'>
        <div className='w-full md:w-2/6 p-8 md:p-4'>
          <img src={IMGT} alt='Monitoring' />
        </div>
        <div className='w-full md:w-1/2'>
          <h4 className='text-3xl text-gray-800 font-bold mb-3'>
            Plan your exercises
          </h4>
          <p className='text-gray-600 mb-8'>
            This training exercise planner provides a great way to begin your
            road to feeling better. You have the flexibility to select exercises
            that suit your preferences or opt for random ones. It's all about
            keeping your workouts engaging and tailored to your needs while you
            journey towards a healthier, more energized self. With this
            adaptable approach, exercise becomes an enjoyable adventure, and
            you're more likely to stick with it for the long term. Start today
            and experience the uplifting benefits of a personalized exercise
            routine.
          </p>
        </div>
      </div>
      <section className='flex-col'>
        <input
          className='my-2 rounded-sm px-1'
          type='text'
          placeholder='Search for exercises'
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className=''>
          {filteredExercises.map((exercise: Exercise) => (
            <ExerciseCard
              key={exercise.id}
              name={exercise.name}
              description={exercise.description}
              id={exercise.id}
            />
          ))}
        </div>
      </section>
      <div className='bg-black h-4 w-full my-16'></div>
      <section>
        <p>
          This will be where you can choose from the different lists of
          exercises and number of exercises, will be randomly picked from the
          arrays
        </p>
        <input
          className='my-2 rounded-sm px-1'
          type='text'
          placeholder='Search for exercises'
          value={num}
          onChange={(e) => e.target.value}
        />
        <ul>
          {randomList.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              name={exercise.name}
              description={exercise.description}
              id={exercise.id}
            />
            /*      <li key={exercise.id}>
            {exercise.name}: {exercise.description}
          </li> */
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ExercisePlanner;
