import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import {counterActions} from '../store/index';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();
  const show = useSelector(state => state.counter.showCounter);

  
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(15));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const resetCounterHandler = () => {
    dispatch(counterActions.reset())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 15</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={resetCounterHandler}>Reset counter</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
