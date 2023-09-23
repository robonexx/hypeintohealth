import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavItemProps {
  title: string;
  path: string;
  cls: string;
  id: number;
  i: number;
}

const NavItem: React.FC<NavItemProps> = ({ title, path, cls, id, i }) => {
  return (
    <motion.li
      className={cls}
      key={id}
      initial={{ opacity: 0, y: i % 2 === 0 ? -100 : 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: i * 0.2 }}
    >
      <Link className='nav_link' to={path}>
        {title}
      </Link>
    </motion.li>
  );
};

export default NavItem;
