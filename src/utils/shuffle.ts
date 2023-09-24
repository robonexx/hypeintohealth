// Function to shuffle an array
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
  
/* 
function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Function to get a specified number of random exercises
export function getRandomExercises(numExercises: number): Array<Exercise> {
  if (numExercises > exerciseList.length) {
    throw new Error(`There are only ${exerciseList.length} exercises available.`);
  }
  const shuffledExercises = shuffleArray(exerciseList);
  return shuffledExercises.slice(0, numExercises);
}

// Define the Exercise type
export type Exercise = {
  name: string;
  description: string;
};

export default exerciseList;
*/
  
  