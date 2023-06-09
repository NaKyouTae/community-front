"use client";

import {useAppDispatch, useAppSelector} from "@/app/hooks";
import {decrement, increment, reset} from "@/app/features/slices/counter.slice";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
      <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <h4 style={{ marginBottom: 16 }}>{count}</h4>
          <button onClick={() => dispatch(increment(1))}>increment</button>
          <button
              onClick={() => dispatch(decrement(1))}
              style={{ marginInline: 16 }}
          >
            decrement
          </button>
          <button onClick={() => dispatch(reset())}>reset</button>
        </div>
      </main>
  );
}