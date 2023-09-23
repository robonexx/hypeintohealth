
interface LogoProps {
  title: string;
}

const Logo: React.FC<LogoProps> = ({ title }) => {

  return (
      <div className="w-2/5">
          <span className="mt-16 mb-4 px-4 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 bg-clip-text text-transparent drop-shadow font-extrabold body-font font-black text-4xl">{title}</span>
    </div>
  );
};

export default Logo;
