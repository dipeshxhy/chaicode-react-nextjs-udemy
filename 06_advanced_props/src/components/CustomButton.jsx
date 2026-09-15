import { Button } from './ui/button';

const CustomButton = ({ text, color, size, onClick, disabled, link }) => {
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block ${size === 'small' ? 'px-2 py-1 text-sm' : size === 'medium' ? 'px-4 py-2 text-base' : size === 'large' ? 'px-6 py-3 text-lg' : 'px-4 py-2 text-base'} ${color === 'primary' ? 'bg-blue-500 hover:bg-blue-600 text-white' : color === 'secondary' ? 'bg-gray-500 hover:bg-gray-600 text-white' : color === 'danger' ? 'bg-red-500 hover:bg-red-600 text-white' : color === 'success' ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-300 hover:bg-gray-400 text-black'} rounded-md ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {text}
      </a>
    );
  }
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`${size === 'small' ? 'px-2 py-1 text-sm' : size === 'medium' ? 'px-4 py-2 text-base' : size === 'large' ? 'px-6 py-3 text-lg' : 'px-4 py-2 text-base'} ${color === 'primary' ? 'bg-blue-500 hover:bg-blue-600 text-white' : color === 'secondary' ? 'bg-gray-500 hover:bg-gray-600 text-white' : color === 'danger' ? 'bg-red-500 hover:bg-red-600 text-white' : color === 'success' ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-300 hover:bg-gray-400 text-black'} rounded-md ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {text}
    </Button>
  );
};
export default CustomButton;
