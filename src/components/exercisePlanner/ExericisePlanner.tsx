import React, { useState, useEffect } from 'react';
import { PiFolderPlus, PiTrashLight } from 'react-icons/pi';
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
// add and remove exercise

const ExercisePlanner: React.FC = () => {
  const [num, setNum] = useState(1);
  const [myList, setMyList] = useState<Exercise[]>([]);
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

  const addExercise = (exercise: Exercise) => {
    // Add the exercise to the myList state
    setMyList([...myList, exercise]);

    // Store the updated myList in local storage
    localStorage.setItem('myList', JSON.stringify([...myList, exercise]));
  };

  const handleRemoveFromMyList = (exerciseId: number) => {
    // Remove the exercise from state (myList)
    setMyList((prevMyList) =>
      prevMyList.filter((item) => item.id !== exerciseId)
    );

    // Remove the exercise from local storage
    const updatedLocalStorage = myList.filter((item) => item.id !== exerciseId);
    localStorage.setItem('myList', JSON.stringify(updatedLocalStorage));
  };

  // trying if this function works
  const array1: Exercise[] = exercises;

  const array2: Exercise[] = dumbbellExercises;

  const numOfExercises = 7;

  const randomList = getRandomExercises(numOfExercises, array1, array2);

  useEffect(() => {
    // Retrieve the user's list from local storage
    const storedMyList = localStorage.getItem('myList');
    if (storedMyList) {
      setMyList(JSON.parse(storedMyList));
    }
  }, []);

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
      <section>
        <h2>Exercise routine</h2>
        <div>
          {myList.map((exercise: Exercise) => (
            <div key={exercise.id} className='flex'>
              <ExerciseCard
                name={exercise.name}
                description={exercise.description}
                id={exercise.id}
              />
              <button
                className='w-1/4 text-red-600 text-xl md:text-2xl cursor-pointer px-4 bg-white grid place-content-center border-b-2 hover:bg-red-200'
                onClick={() => handleRemoveFromMyList(exercise.id)}
              >
                <PiTrashLight />
              </button>
            </div>
          ))}
        </div>
      </section>
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
            <div key={exercise.id} className='flex'>
              <ExerciseCard
                name={exercise.name}
                description={exercise.description}
                id={exercise.id}
              />
              <button
                onClick={() => addExercise(exercise)}
                className='w-1/4 text-2xl md:text-3xl cursor-pointer px-4 bg-white grid place-content-center border-b-2 hover:bg-indigo-500'
              >
                <PiFolderPlus />
              </button>
            </div>
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
