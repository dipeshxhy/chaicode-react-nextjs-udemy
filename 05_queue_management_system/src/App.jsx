import { useState } from 'react';
import AddQueueForm from './components/AddQueueForm';
import DisplayQueue from './components/DisplayQueue';
import TItle from './components/TItle';
import { useEffect } from 'react';

const App = () => {
  const [queue, setQueue] = useState(() => {
    const savedQueue = localStorage.getItem('queue');
    return savedQueue ? JSON.parse(savedQueue) : [];
  });

  const addToQueue = (item) => {
    setQueue((prevQueue) => [item, ...prevQueue]);
  };
  const removeFromQueue = (id) => {
    setQueue((prevQueue) => prevQueue.filter((i) => i.id !== id));
  };
  const updateStatus = (id, status) => {
    setQueue((prevQueue) =>
      prevQueue.map((customer) => (customer.id === id ? { ...customer, status } : customer)),
    );
  };
  useEffect(() => {
    localStorage.setItem('queue', JSON.stringify(queue));
  }, [queue]);
  return (
    <div className="container mx-auto">
      <TItle
        title="Queue Management System"
        desc="Manage your queues efficiently and effectively."
      />
      <main className="flex flex-col md:flex-row gap-10 sm:grid-cols-2">
        <AddQueueForm onAdd={addToQueue} />
        <DisplayQueue queue={queue} onRemove={removeFromQueue} onUpdateStatus={updateStatus} />
      </main>
    </div>
  );
};
export default App;
