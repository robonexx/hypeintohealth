import ExerciseList from '../components/exerciseList/ExerciseList';

const Exercises = () => {
  return (
    <main className='flex flex-col items-center bg-slate-400 text-black box-border lg:w-2/3 lg:mx-auto'>
      <h1 className='mt-16 mb-4 py-2 bg-gradient-to-tr from-yellow-600 via-purple-800 to-orange-700 bg-clip-text text-transparent drop-shadow-xl font-extrabold body-font font-black text-2xl md:text-4xl'>
        Exercises List
      </h1>
      <div className='w-full md:w-1/2'>
        <h4 className='text-2xl lg:text-3xl text-gray-800 font-bold mb-3'>
          Here you can see all exercises
        </h4>
        <p className='text-gray-600 mb-8'>
          Here are three exercise lists to kickstart your fitness journey. The
          key is to simply start working out; it's not about the quantity but
          the consistency. Every step you take is progress, so keep that in
          mind. Begin with 1 - 5 exercises, and gradually add more as you go
          along. And remember, there's no need to rush; we're in this for the
          long haul! Keep pushing forward 😉. If you want to create your own
          routine from the existing lists you can do so here...{' '}
          <a href='/planner' className='text-indigo-500'>
            Routine planner
          </a>
        </p>
      </div>
      <ExerciseList />
    </main>
  );
};

export default Exercises;
