import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from './features/counter/counterSlice';


function App() {
  
  const count = useSelector((state) => state.counter.value)
  const name = useSelector((state) => state.counter.name)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>{name}</h2>
        <button onClick={() => dispatch(increment())}>inc</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(decrement())}>dec</button>
        <br />
        {count}
    </div>
  );
}

export default App;
