'use client';

import { useState } from 'react';
import { Button } from '../../components/ui/button';

const AboutPage = () => {
  const [name, setName] = useState('dipesh');
  return (
    <div>
      <h1>{name}</h1>
      <Button onClick={() => setName('dipesh Chaudhary')}>change name</Button>
    </div>
  );
};
export default AboutPage;
