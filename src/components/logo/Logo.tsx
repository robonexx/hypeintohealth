import {motion} from 'framer-motion'
interface LogoProps {
  title: string;
}

const Logo: React.FC<LogoProps> = ({ title }) => {

  return (
    <motion.div className="w-full"
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    >
          <span className="md:mt-16 md:mb-4 px-1 md:px-4 bg-gradient-to-b from-orange-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-xl font-extrabold body-font font-black text-l w-full md:text-2xl lg:text-4xl">{title}</span>
    </motion.div>
  );
};

export default Logo;
