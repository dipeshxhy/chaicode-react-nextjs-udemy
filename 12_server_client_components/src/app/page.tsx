import { Button } from '../components/ui/button';
import AboutPage from './about/page';

const HomePage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    cache: 'no-store',
  });
  const data = await res.json();
  console.log(data);
  return (
    <div>
      HomePage
      <AboutPage />
      <div>
        <h1>{data.title}</h1>
      </div>
      <Button>click me</Button>
    </div>
  );
};
export default HomePage;
