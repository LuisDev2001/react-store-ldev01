import Button from "@/components/Button"
import { useDispatch, useSelector } from 'react-redux'
import { counterSlice } from '@/store/counter.store'
const CounterView = () => {
  const dispatch = useDispatch()
  const counter = useSelector(counterSlice.selectors.getCounter)
  const { increment, decrement } = counterSlice.actions

  return (
    <div className="text-white text-4xl text-center">
      <h2>Contador</h2>
      <p className="text-6xl">{counter}</p>
      <div className="flex gap-4 justify-center mt-4 bg-white p-4 rounded">
        <Button variant="primary" onClick={() => dispatch(increment())}>Aumentar</Button>
        <Button variant="secondary" onClick={() => dispatch(decrement())}>Disminuir</Button>
      </div>
    </div>
  )
}

export default CounterView