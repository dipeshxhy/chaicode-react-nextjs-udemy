import Counter from './components/Counter';
import Navbar from './components/Navbar';
import ShowPosts from './components/ShowPosts';

const App = () => {
  return (
    <div className="p-4">
      <Navbar />
      <ShowPosts />
      <Counter />
    </div>
  );
};
export default App;
