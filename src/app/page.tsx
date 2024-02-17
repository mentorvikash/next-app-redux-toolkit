"use client";
import { useAppDispatch, useAppSelector, useAppStore } from "./../../lib/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../lib/features/counter/counterSlice";

export default function Home() {
  const count = useAppSelector((state: any) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    // by use of provider we now had passed the store value to whole component.
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div>
          <h2>Count: {count}</h2>
          <div className="flex justify-around border">
            <button type="button" onClick={() => dispatch(increment())}>
              +
            </button>
            <button type="button" onClick={() => dispatch(decrement())}>
              -
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
