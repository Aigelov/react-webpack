import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "../reducers/reposReducer";
import "./App.less";

export const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(({ repos }) => repos.count);

  const onIncrementClick = () => {
    dispatch(setCount(count + 1));
  };

  const onDecrementClick = () => {
    dispatch(setCount(count - 1));
  };

  return (
    <div className="app">
      <button onClick={onIncrementClick}>INCREMENT</button>
      <button onClick={onDecrementClick}>DECREMENT</button>
      <h2>{count}</h2>
    </div>
  );
};
