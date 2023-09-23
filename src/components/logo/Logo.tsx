
interface LogoProps {
  title: string;
}

const Logo: React.FC<LogoProps> = ({ title }) => {

  return (
      <div className="w-2/5">
          <span className="md:mt-16 md:mb-4 px-1 md:px-4 bg-gradient-to-tr from-yellow-300 via-purple-500 to-orange-700 bg-clip-text text-transparent drop-shadow-xl font-extrabold body-font font-black text-l w-full md:text-2xl">{title}</span>
    </div>
  );
};

export default Logo;
