import { FC } from 'react';
import ExerciseSuggestion from '../components/exerciseSuggestion/ExerciseSuggestion';
import ExerciseBanner from '../components/exercisebanner/ExerciseBanner';
import { motion } from 'framer-motion';

const Home: FC = () => {
  return (
    <main className='flex flex-col items-center bg-slate-400 text-black box-border lg:w-2/3 lg:mx-auto'>
      <motion.h1
        className='mt-16 mb-4 py-2 bg-gradient-to-b from-orange-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-xl font-extrabold body-font font-black text-3xl md:text-4xl lg:text-6xl'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
      >
        <motion.span>Hype</motion.span> <motion.span>Into</motion.span>{' '}
        <motion.span>Health</motion.span>
      </motion.h1>
      <ExerciseBanner />
      <ExerciseSuggestion />
    </main>
  );
};

export default Home;
