import { useState } from 'react';
import CustomButton from './CustomButton';
import Title from './Title';

const BasicsProps = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <section id="basics" className="sectionCard">
      <h2 className="text-2xl font-bold">Basics Props</h2>
      <p className="text-muted-foreground">This is examples of using props in React components.</p>
      <p className="text-muted-foreground">Click the buttons to see the props in action.</p>
      <p>Click count: {clickCount}</p>

      {/* different colors */}
      <div className="flex flex-col gap-2">
        <Title text={'Different Colors'} />
        <div className="flex gap-2 mb-4">
          <CustomButton
            text="Primary"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <CustomButton
            text="Secondary"
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <CustomButton
            text="Danger"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <CustomButton
            text="Success"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
        {/* different sizes */}
        <div className="">
          <Title text={'Different Sizes'} />
          <div className="flex gap-2"></div>
          <CustomButton text="Small" size="small" onClick={() => setClickCount(clickCount + 1)} />
          <CustomButton text="Medium" size="medium" onClick={() => setClickCount(clickCount + 1)} />
          <CustomButton
            disabled
            text="Large"
            size="large"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>
    </section>
  );
};
export default BasicsProps;
