import BasicsProps from './BasicsProps';
import ChildrenProps from './ChildrenProps';
import ComplexProps from './ComplexProps';
import RefProps from './RefProps';

const Main = () => {
  return (
    <main>
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold mb-3">React Props Explained 🚀</h1>
        <p className="text-lg text-muted-foreground">A comprehensive guide to understanding React props.</p>
      </header>
      <BasicsProps />
      <RefProps />
      <ChildrenProps />
      <ComplexProps />
    </main>
  );
};
export default Main;
