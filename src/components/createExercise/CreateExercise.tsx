import { FC, useState, FormEvent, ChangeEvent } from 'react';
import Input from '../Input/Input';
import TextArea from '../textArea/TextArea';

const CreateExercise: FC = () => {
  const [state, setState] = useState({
    name: '',
    description: '',
  });
  const [error, setError] = useState(false);

  // handle on change
  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      console.log(state.name, state.description)
    }
  };

  return (
    <main className='flex flex-col items-center bg-slate-400 text-black box-border lg:w-2/3 lg:mx-auto'>
      <section>
        <h1 className='mt-16 mb-4 py-2 bg-gradient-to-tr from-yellow-600 via-purple-800 to-orange-700 bg-clip-text text-transparent drop-shadow-xl font-extrabold body-font font-black text-2xl md:text-4xl'>
          Create your own exercise
        </h1>
        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <Input
            type='text'
            label='Name'
            value={state.name}
            name='name'
            error={error}
            onChange={handleOnChange}
            placeholder='Enter name of exercise'
          />
          <TextArea
            label='Description'
            value={state.description}
            name='description'
            error={error}
            onChange={handleOnChange}
            placeholder='Enter description'
          />
          <button
            type='submit'
            className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-8 my-4 w-1/3 md:w-32'
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default CreateExercise;
