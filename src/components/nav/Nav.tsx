import { useState } from 'react';
import Logo from '../logo/Logo';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className='flex items-center justify-between border-b border-gray-400 py-8'>
      <nav>
        <section className='MOBILE-MENU flex lg:hidden mx-4'>
          <div
            className='HAMBURGER-ICON space-y-2'
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            {' '}
            <div
              className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>
            <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]'>
              <a href='/' className='self-center text-4xl my-16'>
                <Logo title='Hype Into Health' />
              </a>
              <li className='hover:border-b hover:border-gray-400 my-8 uppercase'>
                <a href='/about'>Exercises</a>
              </li>
              <li className='hover:border-b hover:border-gray-400 my-8 uppercase'>
                <a href='/portfolio'>Foods</a>
              </li>
              <li className='hover:border-b hover:border-gray-400 my-8 uppercase'>
                <a href='/contact'>Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className='DESKTOP-MENU hidden space-x-8 lg:flex text-slate-200 px-8 text-xl'>
          <li>
            <a href='/about'>Exercises</a>
          </li>
          <li>
            <a href='/foods'>Foods</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
