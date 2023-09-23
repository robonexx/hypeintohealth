
interface LogoProps {
  title: string;
}

const Logo: React.FC<LogoProps> = ({ title }) => {

  return (
      <div className="w-2/5">
          <span className="md:mt-16 md:mb-4 px-1 md:px-4 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 bg-clip-text text-transparent drop-shadow font-extrabold body-font font-black text-l w-full md:text-2xl">{title}</span>
    </div>
  );
};

export default Logo;
