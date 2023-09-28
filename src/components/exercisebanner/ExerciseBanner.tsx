import React from 'react';
import IMG from 'svg/workout2.svg';
import IMG2 from 'svg/movement.svg';
import IMG3 from 'svg/stability.svg';

const ExerciseBanner: React.FC = () => {
  return (
    <section className='container mx-auto px-6 py-10 lg:px-40'>
      <div className='flex items-center justify-between flex-wrap mb-40'>
        <div className='w-full md:w-2/6 p-8 md:p-4'>
          <img src={IMG3} alt='Monitoring' />
        </div>
        <div className='w-full md:w-1/2'>
          <h4 className='text-2xl lg:text-3xl text-gray-800 font-bold mb-3'>
            Your help online
          </h4>
          <p className='text-gray-600 mb-8'>
            Whether you're taking your first steps into the world of exercise or
            rekindling a commitment to your well-being, remember that every move
            counts. Starting to exercise is your gateway to a healthier, happier
            you. Embrace the momentum, and let each workout be a step toward
            your brighter, healthier future.
          </p>
        </div>
      </div>
      <div className='flex items-center justify-between flex-wrap mb-40'>
        <div className='w-full md:w-1/2'>
          <h4 className='text-2xl lg:text-3xl text-gray-800 font-bold mb-3'>
            Where to begin?
          </h4>
          <p className='text-gray-600 mb-8'>
            Wondering where to start? We suggest beginning right where you are,
            whether you're at home or anywhere else. We have a tailored set of
            exercises that are perfect for beginners, and as you advance, you
            can explore different exercise categories to keep things exciting.
          </p>
        </div>
        <div className='w-full md:w-2/6 p-8 md:p-4'>
          <img src={IMG} alt='Monitoring' />
        </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row items-center justify-between flex-wrap mb-20'>
        <div className='w-full md:w-2/6 p-8 md:p-4'>
          <img src={IMG2} alt='Monitoring' />
        </div>
        <div className='w-full md:w-1/2'>
          <h4 className='text-2xl lg:text-3xl text-gray-800 font-bold mb-3'>
            To help you get started
          </h4>
          <p className='text-gray-600 mb-8'>
            Here you can get a random exercise, you can choose from beginner to advanced level and then number of exercises.
            And it will spit out a nice exercise program for you to use today.
            
            What are you waiting for Lets Go! 😍
            
            If you want to plan your exercise and choose your own, you can to that here - <a href='/planner' className='text-indigo-500'>Routine planner</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExerciseBanner;
