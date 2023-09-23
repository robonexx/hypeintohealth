import { FC } from 'react';
import { MouseEvent } from 'react';

export type ButtonProps = {
  title?: string;
  type?: 'primary' | 'rounded';
  onClick?: (e: MouseEvent) => void;
};

const Button: FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-8 my-4'
    >
      {title || 'Click'}
    </button>
  );
};

export default Button;
