import exercises from '../../assets/data/ExerciseData';

function ExerciseList() {
  return (
    <div className='w-full bg-red-500 text-white'>
      <h2>List of Exercises</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseList;
