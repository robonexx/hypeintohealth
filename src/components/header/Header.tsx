import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className='relative w-full h-16 flex items-center justify-between bg-black lg:w-2/3 mx-auto'>
      {children}
      <motion.hr
        className='absolute top-16 w-0 border-b border-white border-opacity-20 transition-all duration-500 ease-in-out'
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.6, delay: 0.3, ease: 'easeInOut' }}
      />
    </header>
  );
};

export default Header;
