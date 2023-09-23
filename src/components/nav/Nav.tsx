import React from 'react';

interface NavProps {
  active: boolean;
  setActive: (active: boolean) => void;
  children: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({ active, setActive, children }) => {
  return (
    <nav className={`fixed top-0 right-0 z-10 w-16 h-16 flex transition-all ease-in-out rounded-full ${active ? 'scroll' : ''}`}>
      <ul className={`menu ${active ? 'open' : ''}`}>{children}</ul>
    </nav>
  );
};

export default Nav;
