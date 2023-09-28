import { FC, ChangeEvent, FormEvent, useState } from 'react';
import ExercisePlanner from '../components/exercisePlanner/ExericisePlanner';
import Input from '../components/Input/Input';

const Planner: FC = () => {
  const [state, setState] = useState({
    name: '',
    description: '',
  });
  const [error, setError] = useState(false);

  // handle on change
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    console.log('onchange', state);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.name.trim()) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <main className='flex flex-col items-center bg-slate-400 text-black box-border lg:w-2/3 lg:mx-auto'>
      <section>
        <h1 className='mt-16 mb-4 py-2 bg-gradient-to-b from-orange-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-xl font-extrabold body-font font-black text-2xl md:text-4xl lg:text-6xl text-center'>
          The exercise planner
        </h1>
        <ExercisePlanner />
      </section>
      <section>
        <h1 className='mt-16 mb-4 py-2 bg-gradient-to-tr from-yellow-600 via-purple-800 to-orange-700 bg-clip-text text-transparent drop-shadow-xl font-extrabold body-font font-black text-2xl md:text-4xl'>
          Create your own exercise
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            type='text'
            label='Name'
            value={state.name}
            name='name'
            error={error}
            onChange={handleOnChange}
            placeholder='Please enter your name'
          />
          <button type='submit'>Submit</button>
        </form>
      </section>
    </main>
  );
};

export default Planner;
