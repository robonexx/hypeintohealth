import { useState } from 'react';
import Logo from '../logo/Logo';
import { PiXCircleThin } from 'react-icons/pi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { navData } from '../../assets/data/navData';
import NavItem from './NavItem';

import * as styles from './styles';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className='flex items-center justify-between border-b border-gray-400 py-8'>
      <nav>
        <section className='flex lg:hidden mx-4'>
          <div
            className='space-y-2'
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <RxHamburgerMenu className='block h-8 w-8 text-gray-400' />
          </div>

          <div className={isNavOpen ? styles.ShowNav : styles.HideNav}>
            {' '}
            <div
              className='absolute top-0 right-0 px-8 py-8'
              onClick={() => setIsNavOpen(false)}
            >
              <PiXCircleThin className='block h-8 w-8 text-zinc-800' />
            </div>
            <ul className='flex flex-col items-center justify-between min-h-96 transition-all duration-500'>
              <a href='/' className='self-center text-4xl my-16'>
                <Logo title='Hype Into Health' />
              </a>
              {navData.map(({ title, path, id }) => (
                <NavItem title={title} path={path} key={id} />
              ))}
            </ul>
          </div>
        </section>

        <ul className='hidden space-x-8 lg:flex text-slate-200 px-8 text-xl'>
          {navData.map(({ title, path, id }) => (
            <NavItem title={title} path={path} key={id} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
