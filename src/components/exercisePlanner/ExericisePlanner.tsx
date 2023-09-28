import React, { useState, useEffect } from 'react';
import { PiFolderPlus, PiTrashLight } from 'react-icons/pi';
import IMGT from 'svg/tracker.svg';
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
// remove the myList from localstorage and state

const ExercisePlanner: React.FC = () => {
  /*  const [num, setNum] = useState(1); */
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
    const checkIfExists = myList.some((item) => item.id === exercise.id);

    if (!checkIfExists) {
      setMyList([...myList, exercise]);

      const updatedLocalStorage = [...myList, exercise];
      localStorage.setItem('myList', JSON.stringify(updatedLocalStorage));
    }
  };

  const handleRemoveFromMyList = (exerciseId: number) => {
    setMyList((prevMyList) =>
      prevMyList.filter((item) => item.id !== exerciseId)
    );

    const updatedLocalStorage = myList.filter((item) => item.id !== exerciseId);
    localStorage.setItem('myList', JSON.stringify(updatedLocalStorage));
  };

  // remove myList from state and localStorage
  const clearMyList = () => {
    setMyList([]);
    localStorage.removeItem('myList');
  };

  useEffect(() => {
    // get items from local storage if there is any
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
            road to feeling better. You have the flexibility to search & select
            exercises that suit your preferences or opt for random ones. It's
            all about keeping your workouts engaging and tailored to your needs
            while you journey towards a healthier, more energized self. With
            this adaptable approach, exercise becomes an enjoyable adventure,
            and you're more likely to stick with it for the long term. Start
            today and experience the uplifting benefits of a personalized
            exercise routine.
          </p>
        </div>
      </div>
      <p className='text-gray-600'>
        Your list will be automatically saved to your device storage
        (localstorage), you can remove it with the delete button
      </p>
      <section>
        <div className='w-full flex items-center justify-between'>
          <h2 className='mt-16 mb-4 py-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent drop-shadow-md font-extrabold body-font font-black text-2xl md:text-3xl lg:text-5xl'>
            Selected exercises for your daily routine
          </h2>
          <button
            onClick={clearMyList}
            className='w-1/4 mt-4 px-2 py-2 bg-red-500 text-white rounded grid place-content-center hover:bg-red-300 hover:text-zinc-700 transition-all duration-300'
          >
            <PiTrashLight />
          </button>
        </div>
        <div>
          {myList.map((exercise: Exercise) => (
            <div key={exercise.id} className='flex'>
              <ExerciseCard
                name={exercise.name}
                description={exercise.description}
                id={exercise.id}
              />
              <button
                className='w-1/4 text-red-600 text-xl md:text-2xl cursor-pointer px-4 bg-white grid place-content-center border-b-2 hover:bg-red-300 hover:text-zinc-700 transition-all duration-300'
                onClick={() => handleRemoveFromMyList(exercise.id)}
              >
                <PiTrashLight />
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className='flex-col mt-10'>
        <input
          className='my-2 rounded-sm px-1 py-2 text-lg'
          type='text'
          placeholder='Search for exercises'
          value={searchQuery}
          onChange={handleSearchChange}
        />{' '}
        <span className='px-2 font-semibold text-gray-600'>
          Here you can search for exercises
        </span>
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
                className='w-1/4 text-2xl md:text-3xl cursor-pointer px-4 bg-white grid place-content-center border-b-2 hover:bg-indigo-500 transition-all duration-300'
              >
                <PiFolderPlus />
              </button>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ExercisePlanner;
