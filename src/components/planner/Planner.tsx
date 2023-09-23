import React from 'react';
import IMGT from 'svg/tracker.svg';

const ExerciseBanner: React.FC = () => {
  return (
    <section className='container mx-auto px-6 p-10 lg:px-40'>
      <h2 className='text-4xl font-bold text-center text-gray-800 mb-40'>
        Exercise planner
      </h2>

      <div className='flex flex-col-reverse md:flex-row items-center justify-between flex-wrap mb-40'>
        <div className='w-full md:w-2/6 p-8 md:p-4'>
          <img src={IMGT} alt='Monitoring' />
        </div>
        <div className='w-full md:w-1/2'>
          <h4 className='text-3xl text-gray-800 font-bold mb-3'>
            Plan your exercises
          </h4>
          <p className='text-gray-600 mb-8'>
            This training exercise planner provides a great way to begin your
            road to feeling better. You have the flexibility to select exercises
            that suit your preferences or opt for random ones. It's all about
            keeping your workouts engaging and tailored to your needs while you
            journey towards a healthier, more energized self. With this
            adaptable approach, exercise becomes an enjoyable adventure, and
            you're more likely to stick with it for the long term. Start today
            and experience the uplifting benefits of a personalized exercise
            routine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExerciseBanner;
