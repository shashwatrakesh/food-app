import { useMemo, useState, useRef, useEffect } from "react";

const Demo2 = () => {
  const [y, setY] = useState(1);

  let x = 1;

  const ref = useRef(1);
  // ref = {current: 0}

  const refInterval = useRef(
    setInterval(() => {
      console.log("Hello from TikTok", Math.random());
    }, 1000)
  );

  useEffect(() => {
    /*
        const i = setInterval(() => {
        console.log("Hello from TikTok", Math.random());
        }, 1000);

        return () => {
        return clearInterval(i);
        };
     */
    // we can achieve this clearinterval using useRef
  }, []);

  console.log("rendering....");

  return (
    <div>
      <h1>Demo2 Component</h1>
      <div>
        <button
          onClick={() => {
            x += 1;
            console.log("x=", x);
          }}
        >
          Update X
        </button>
        <h1>X = {x}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            setY(y + 1);
          }}
        >
          Update Y
        </button>
        <h1>Y = {y}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref=", ref.current);
          }}
        >
          Update Ref
        </button>
        <h1>Ref = {ref.current}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            clearInterval(ref.current);
          }}
        >
          Stop the timer
        </button>
      </div>
    </div>
  );
};

export default Demo2;
