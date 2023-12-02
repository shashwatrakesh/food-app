import { useMemo, useState } from "react";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  console.log("rendering....");
  // calculation heavy operation -> useMemo to cache this

  const isPrime = (num) => {
    console.log(num);
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  //Function to find the nth prime number
  const findNthPrime = (n) => {
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
        count++;
      }
      num++;
    }
    return num - 1;
  };

  const prime = useMemo(() => {
    return findNthPrime(text);
  }, [text]);

  return (
    <div>
      <h1>Demo Component</h1>
      <button
        onClick={() => {
          isDarkTheme ? setIsDarkTheme(false) : setIsDarkTheme(true);
        }}
      >
        {isDarkTheme ? "change to light" : "Change to Dark"}
      </button>
      <input
        type="number"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h3>nth Prime: {prime}</h3>
    </div>
  );
};

export default Demo;
