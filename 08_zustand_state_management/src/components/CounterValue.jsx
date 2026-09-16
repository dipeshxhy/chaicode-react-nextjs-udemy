import { useCounterStore } from '../store/counterStore';

const CounterValue = () => {
  const count = useCounterStore((state) => state.count);
  return <div>Count: {count}</div>;
};
export default CounterValue;
