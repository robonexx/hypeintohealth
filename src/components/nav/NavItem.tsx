import React from 'react';

interface NavItemProps {
  path: string;
    title: string;
    key: number;
}

const NavItem: React.FC<NavItemProps> = ({ title, path }) => {
  return (
    <li className='hover:border-b hover:border-gray-400 my-8 uppercase'>
      <a href={path}>{title}</a>
    </li>
  );
};

export default NavItem;