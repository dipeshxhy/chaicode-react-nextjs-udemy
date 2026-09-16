import { useCounterStore } from '../store/counterStore';
import { Button } from './ui/button';

const CounterButton = () => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  return (
    <div>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};
export default CounterButton;
