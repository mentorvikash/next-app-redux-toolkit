"use client";
import Image from "next/image";
import { store } from "./store";
import { Provider, useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./../redux/counter/counterSlice";

export default function Home() {
  // const count = useSelector((state) => state);
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log({ count });
  return (
    // by use of provider we now had passed the store value to whole component.
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div>
            <h2>Count: 0</h2>
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
    </Provider>
  );
}
