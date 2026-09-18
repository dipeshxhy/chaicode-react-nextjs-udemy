'use client';
import { useState } from 'react';
import AboutPage from './about/page';
import { Button } from '../components/ui/button';

const HomePage = () => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, completed }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setMessage(
        data.message + ' Title: ' + data.data.title + ' Completed: ' + data.data.completed,
      );

      setTitle('');
      setCompleted(false);
    }
  };
  return (
    <div>
      HomePage
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="checkbox"
            name="completed"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          <Button type="submit">Add Todo</Button>
        </form>
      </div>
      <div>
        <p>{message}</p>
      </div>
      <AboutPage />
      <div>
        <p>This is the home page.</p>
      </div>
    </div>
  );
};
export default HomePage;
