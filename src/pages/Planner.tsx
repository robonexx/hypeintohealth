import { FC } from 'react';
import ExercisePlanner from '../components/exercisePlanner/ExericisePlanner';
import CreateExercise from '../components/createExercise/CreateExercise';

const Planner: FC = () => {
  return (
    <main className='flex flex-col items-center bg-slate-400 text-black box-border lg:w-2/3 lg:mx-auto'>
      <section>
        <h1 className='mt-16 mb-4 py-2 bg-gradient-to-b from-orange-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-xl font-extrabold body-font font-black text-2xl md:text-4xl lg:text-6xl text-center'>
          The exercise planner
        </h1>
        <ExercisePlanner />
        <CreateExercise />
      </section>
    </main>
  );
};

export default Planner;
