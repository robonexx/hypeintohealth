import React from 'react';
import { motion } from 'framer-motion';

const wrapperVariant = {
  hidden: {
    opacity: '-100vw', // move out of the site
  },
  visible: {
    opacity: 0, // bring it back to normal
    transition: {
      delay: 0.5,
      when: 'beforeChildren', // use this instead of delay
      staggerChildren: 0.2, // apply stagger on the parent tag
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
        className={`hamburger ${active ? 'active' : ''}`}
        id='hamburger'
        variants={wrapperVariant}
        initial='hidden'
        animate='visible'
      >
        <motion.span variants={itemVariant}></motion.span>
        <motion.span variants={itemVariant}></motion.span>
        <motion.span variants={itemVariant}></motion.span>
      </motion.div>
    </div>
  );
};

export default MenuBtn;
