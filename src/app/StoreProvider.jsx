"use client";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./../../lib/features/store";
import { initilizeCount } from "./../../lib/features/counter/counterSlice";

export default function StoreProvider({ count = 0, children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(initilizeCount(count));
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
