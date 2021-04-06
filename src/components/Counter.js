import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // Your code below

  useEffect(() => {
    const dataStorage = localStorage.getItem("count") ?? "";
    setCount(Number(dataStorage));
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);


  function handleDecrement() {
    setCount(count - 1);
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
