import ProductCard from './components/ProductCard';
import { Button } from './components/ui/button';

const App = () => {
  return (
    <>
      <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-sky-400 dark:text-black dark:hover:bg-sky-500 w-full">
        Learn Tailwindcss Integrated{' '}
      </Button>
      <div className="flex mt-4 ">
        <ProductCard
          imageUrl="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          buttonText="Join Now"
          title="Buy Python Course"
        />
        <ProductCard
          title="Buy Nodejs course"
          imageUrl="https://images.pexels.com/photos/18681382/pexels-photo-18681382.jpeg"
        />
        <ProductCard
          title="Somewhere in Europe"
          imageUrl="https://images.pexels.com/photos/2519823/pexels-photo-2519823.jpeg"
          buttonText="Enjoy trip"
        />
      </div>
    </>
  );
};
export default App;
