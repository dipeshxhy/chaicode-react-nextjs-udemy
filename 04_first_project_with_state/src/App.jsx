import { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

const App = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const buttons = [
    {
      id: 1,
      text: 'increment',
      onClick: () => setCount(prev=> prev + 1),
    },
    {
      id: 2,
      text: 'decrement',
      onClick: () => setCount(prev=>Math.max(prev - 1, 0)),
    },
    {
      id: 3,
      text: 'reset',
      onClick: () => setCount(0),
    },
  ];
  return (
    <div className="flex flex-col h-screen justify-center items-center ">
      <h1 className="text-4xl font-bold mb-2">Counter</h1>
      <h2 className="text-xl">
        Count is : <strong>{count}</strong>
      </h2>
      <div>
        {buttons.map((button) => (
          <Button key={button.id} onClick={button.onClick}>
            {button.text}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Input
          className={'w-60'}
          placeholder="Enter a value"
          value={inputValue}
          type="number"
          onChange={(e) => setInputValue(Number(e.target.value))}
          min={0}
        />
        <Button onClick={() => setCount(inputValue)}>
          Set to <strong>{inputValue}</strong>
        </Button>
      </div>
    </div>
  );
};
export default App;
