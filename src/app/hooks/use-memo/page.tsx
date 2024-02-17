"use client";
import React, { useMemo, useState } from "react";

function Page() {
  const [first, setFirst] = useState(15);
  const [second, setSecond] = useState(18);
  const [third, setThird] = useState(18);

  // here this pure function do get trigger if other then first or second value changes anytime
  const pureFunction = () => {
    console.log("pureFuction is running");
    let c = Number(first) + Number(second);
    return c;
  };

  const catchValue = useMemo(pureFunction, [first, second]);

  return (
    <div>
      <h1>Learn to use useMemo Hook in react</h1>
      <div>
        <label htmlFor="first">first input</label>
        <input
          name="first"
          type="number"
          onChange={(event: any) => setFirst(event.target.value)}
        />
        <br />
        <label htmlFor="second">second input</label>
        <input
          name="second"
          type="number"
          onChange={(event: any) => setSecond(event.target.value)}
        />
        <br />
        <label htmlFor="third">third input</label>
        <input
          name="third"
          type="number"
          onChange={(event: any) => setThird(event.target.value)}
        />
      </div>

      <h3>Here we are showing catch value: {catchValue}</h3>
      <h3>Notes:</h3>
      <p>
        useMemo is a React Hook that lets you cache the result of a calculation
        between re-renders
      </p>
      <p>
        <b> Syntex to follow: </b>
        <i>const cachedValue = useMemo(calculateValue, dependencies)</i>
      </p>
    </div>
  );
}

export default Page;
