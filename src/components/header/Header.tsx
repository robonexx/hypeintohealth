import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className='relative w-full h-20 flex items-center justify-between bg-black lg:w-2/3 mx-auto'>
      {children}
      <motion.hr
        className='absolute z-10 top-20 w-0 border-b border-4 border-yellow-400 transition-all duration-500 ease-in-out'
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, ease: 'linear' }}
      />
    </header>
  );
};

export default Header;
