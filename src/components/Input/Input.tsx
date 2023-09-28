import { FC, ChangeEvent } from 'react';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  name: string;
  value: string | number;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <div className='mt-5'>
      <label
        htmlFor={label}
        className='text-lg font-semibold w-60 bg-slate-400 text-slate-50 '
      >
        {label}
      </label>
      <input
        className='text-base font-normal w-60 bg-slate-400 text-slate-50 rounded-lg border-2 border-current placeholder-[#667085]'
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      ></input>
      {error && (
        <p className='text-[#db4437] text-sm font-normal ml-3 mt-1'>
          This field can't be empty
        </p>
      )}
    </div>
  );
};

export default Input;
