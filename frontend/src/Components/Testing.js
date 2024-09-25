import React, { useEffect, useState } from 'react';

function Testing() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log({count});
  }, [count]);

  const IncreaseCount = () => {
    setCount(current => current + 1);
  };

  const DecreaseCount = () => {
    setCount(current => current - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncreaseCount}>Increase</button>
      <br />
      <button onClick={DecreaseCount}>Decrease</button>
    </>
  );
}

export default Testing;
