import React from 'react';
import IMG from 'svg/workout2.svg';
import IMG2 from 'svg/workout1.svg';

const ExerciseBanner: React.FC = () => {
  return (
    <section className='container mx-auto px-6 p-10 lg:px-40'>
      <h2 className='text-4xl font-bold text-center text-gray-800 mb-40'>
        Welcome to BETTER HEALTH
      </h2>
      <div className='flex items-center justify-between flex-wrap mb-40'>
        <div className='w-full md:w-1/2'>
          <h4 className='text-3xl text-gray-800 font-bold mb-3'>
            Your help online to start working out
          </h4>
          <p className='text-gray-600 mb-8'>
            Whether you're taking your first steps into the world of exercise or
            rekindling a commitment to your well-being, remember that every move
            counts. Starting to exercise is your gateway to a healthier, happier
            you. Embrace the momentum, and let each workout be a step toward
            your brighter, healthier future.
          </p>
        </div>
        <div className='w-full md:w-2/6 p-8 md:p-4'>
          <img src={IMG} alt='Monitoring' />
        </div>
      </div>
      <div className='flex items-center justify-between flex-wrap mb-40'>
        <div className='w-full md:w-1/2'>
          <h4 className='text-3xl text-gray-800 font-bold mb-3'>
            Where to begin?
          </h4>
          <p className='text-gray-600 mb-8'>
            We recommend to just begin right where you stand. Are you at you
            home? well we got the perfect set of exercises to get you started
            And as you progress you can change the exercise catergory
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
          <h4 className='text-3xl text-gray-800 font-bold mb-3'>
            Here is three exercise lists to help you get started
          </h4>
          <p className='text-gray-600 mb-8'>
            All you got to do now is... start working out, its not how much you
            do. Everystep is a progress! remember that Take 1 - 5 exercises and
            then start adding up as you go.
            <br />
            <br />
            Rememeber! NO Rush! we keep going ;)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExerciseBanner;
