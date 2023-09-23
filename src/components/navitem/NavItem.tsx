interface NavItemProps {
  title: string;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, path }) => {
  return (
    <li
      className={`group relative grid place-content-center capitalize transition-all duration-1000 px-4`}
    >
      <a
        className='p-1 rounded w-full h-full flex items-center justify-center text-normal uppercase no-underline group-hover:bg-white text-white group-hover:text-slate-800 transition-all duration-500 '
        href={path}
      >
        {title}
      </a>
    </li>
  );
};

export default NavItem;
