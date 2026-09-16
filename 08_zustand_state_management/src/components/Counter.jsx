import { useCounterStore } from '../store/counterStore';
import { Button } from './ui/button';
import { Card, CardAction, CardTitle } from './ui/card';

const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore((state) => state);
  return (
    <Card className="max-w-sm mx-auto mt-10 p-4 bg-zinc-100">
      <CardTitle className="text-xl font-bold text-center">Zustand</CardTitle>
      <p className="text-lg font-semibold">Count: {count}</p>
      <CardAction className="flex gap-2 ">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={reset}>Reset</Button>
      </CardAction>
    </Card>
  );
};
export default Counter;
