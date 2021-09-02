import React, { useState } from 'react';
import './cool-counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section id="coolcounter">
      <div>
        <h2>Click the button to increase the tickle count!</h2>
        <h4>This is a react component rendered in MDX!</h4>
        <h3 style={{ marginTop: '2rem', marginBottom: '2rem' }}> # of Tickles: {count} </h3>
        <button
          type="button"
          className="glow-on-hover"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Tickle Me!
        </button>
      </div>
    </section>
  );
};

export default Counter;
