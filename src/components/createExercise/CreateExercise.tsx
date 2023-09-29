import { FC, useState, FormEvent, ChangeEvent, useEffect } from 'react';
import Input from '../Input/Input';
import TextArea from '../textArea/TextArea';
import { Exercise } from '../../assets/data/ExerciseData';
import ExerciseCard from '../exercisecard/ExerciseCard';

const CreateExercise: FC = () => {
  const [state, setState] = useState({
    name: '',
    description: '',
  });
  const [myExercises, setMyExercises] = useState<Exercise[]>([]);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

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
      console.log(state.name, state.description);

      // Create a new exercise object
      const newExercise: Exercise = {
        id: Math.floor(Math.random() * 1000), // Use a better method to generate IDs in a real-world scenario
        name: state.name,
        description: state.description,
      };

      // Add the new exercise to myExercise array
      // Check if there are existing exercises in local storage
      const storedMyExercise = localStorage.getItem('myExercises');
      let updatedMyExercise: Exercise[];

      if (storedMyExercise) {
        const existingExercises = JSON.parse(storedMyExercise);
        updatedMyExercise = [...existingExercises, newExercise];
      } else {
        updatedMyExercise = [newExercise];
      }

      // Update local storage
      localStorage.setItem('myExercises', JSON.stringify(updatedMyExercise));

      setMyExercises(updatedMyExercise);

      // Clear the form inputs
      setState({ name: '', description: '' });
    }
  };

  // Check if there are existing exercises in local storage with useEffect hook if no exercises we push a empty array to state.
  // using a loaded state to update the dom on rerender
  useEffect(() => {
    if (!loaded) {
      const storedMyExercises = localStorage.getItem('myExercises');
      if (storedMyExercises) {
        setMyExercises(JSON.parse(storedMyExercises));
      } else {
        setMyExercises([]);
      }
      // Set loaded to true to avoid infinite loop
      setLoaded(true);
    }
  }, [loaded]);

  return (
    <main className='container mx-auto px-6 p-10 lg:px-40'>
      <section>
        <h2 className='mt-16 mb-4 py-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent drop-shadow-md font-extrabold body-font font-black text-xl md:text-2xl lg:text-3xl'>
          Create your own exercise
        </h2>
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
      <section>
        <h2 className='mt-16 mb-4 py-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent drop-shadow-md font-extrabold body-font font-black text-xl md:text-2xl lg:text-3xl'>
          Your own exercises
        </h2>
        {myExercises ?
          myExercises.map((ex) => <ExerciseCard {...ex} key={ex.id} />) : <div>Loading...</div>}
      </section>
    </main>
  );
};

export default CreateExercise;
