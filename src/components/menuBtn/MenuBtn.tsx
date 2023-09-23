import React from 'react';
import { motion } from 'framer-motion';

const wrapperVariant = {
  hidden: {
    opacity: '0',
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

interface MenuBtnProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const MenuBtn: React.FC<MenuBtnProps> = ({ active, setActive }) => {
  const onClickHandler = () => {
    setActive(!active);
    console.log(active);
  };

  return (
    <div
      className='hamburger_wrapper absolute top-0 right-0 z-10 rounded-full shadow-md'
      onClick={() => onClickHandler()}
    >
      <motion.div
        className={`hamburger ${active ? 'active' : ''} HAMBURGER-ICON space-y-2`}
        id='hamburger'
        variants={wrapperVariant}
        initial='hidden'
        animate='visible'
      >
        <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
        <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
        <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
      </motion.div>
    </div>
  );
};

export default MenuBtn;
