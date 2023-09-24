import React from 'react';

interface NavItemProps {
  path: string;
  title: string;
  key: number;
}

const NavItem: React.FC<NavItemProps> = ({ title, path }) => {
  return (
    <li className='group my-8 uppercase relative'>
      <a href={path}>{title}</a>
      <div className='absolute bottom-0 left-0 w-0 border-b border-transparent group-hover:w-full group-hover:border-b group-hover:border-gray-400 transition-all duration-300'></div>
    </li>
  );
};

export default NavItem;
