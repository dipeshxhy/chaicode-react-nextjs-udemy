import { forwardRef } from 'react';
import Title from './Title';
import { useRef } from 'react';

const CustomInput = forwardRef(({ label, ...props }, ref) => {
  return (
    <div className="mb-2">
      <label className="block mb-1 text-muted-foreground">{label}</label>
      <input
        ref={ref}
        type="text"
        className="border border-border bg-background text-foreground rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
});
CustomInput.displayName = 'CustomInput';
const RefProps = () => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const handleFocusNameInput = () => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  };
  const getInputValue = () => {
    if (nameInputRef.current) {
      alert('Name Input Value:', nameInputRef.current.value);
    }
    if (emailInputRef.current) {
      alert('Email Input Value:', emailInputRef.current.value);
    }
  };
  const clearInputValues = () => {
    if (nameInputRef.current) {
      nameInputRef.current.value = '';
    }
    if (emailInputRef.current) {
      emailInputRef.current.value = '';
    }
    nameInputRef.current.focus();
  };
  const handleFocusEmailInput = () => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  };
  return (
    <section id="ref" className="sectionCard">
      <Title text={'Ref Props'} />
      <p className="text-muted-foreground">This is an example of using ref props in React components.</p>
      <CustomInput ref={nameInputRef} label="Name" placeholder="Enter your name" />
      <CustomInput ref={emailInputRef} label="Email" placeholder="Enter your email" />
      <div className="flex gap-2">
        <button
          onClick={handleFocusNameInput}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Focus Name Input
        </button>
        <button
          onClick={handleFocusEmailInput}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Focus Email Input
        </button>
        <button
          onClick={getInputValue}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
        >
          Get Input Values
        </button>
        <button
          onClick={clearInputValues}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Clear Input Values
        </button>
      </div>
    </section>
  );
};

export default RefProps;
