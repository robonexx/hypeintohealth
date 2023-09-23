import ExerciseList from './components/exerciseList/ExerciseList';
import ExerciseBanner from './components/exercisebanner/ExerciseBanner';

function App() {
  return (
    <>
      <main className='w-full min-h-screen flex flex-col items-center bg-slate-400 text-black box-border lg:w-2/3 lg:m-auto'>
        <h1 className='body-font font-black text-4xl'>Your daily routine</h1>
       <ExerciseBanner />
        <ExerciseList />
      </main>
    </>
  );
}

export default App;
