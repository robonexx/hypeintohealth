type Exercise = {
  id: number;
  name: string;
  description: string;
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Combine exercise arrays and get a specified number of random exercises 
export function getRandomExercises(
  numExercises: number,
  ...exerciseArrays: Exercise[][]
): Exercise[] {
  const combinedExercises = exerciseArrays.reduce(
    (accumulator, currentArray) => [...accumulator, ...currentArray],
    []
  );

  if (numExercises > combinedExercises.length) {
    throw new Error(`There are only ${combinedExercises.length} exercises available.`);
  }

  const shuffledExercises = shuffleArray(combinedExercises);
  return shuffledExercises.slice(0, numExercises);
}



// first version 
/* 
export function shuffleArray<T>(array: T[]): T[] {
    if (!Array.isArray(array)) {
      throw new Error('Input is not an array.');
    }
  
  // Creating a copy of the original array
    const shuffledArray = [...array]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}
  
 */