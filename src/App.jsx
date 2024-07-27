import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount} from "./store/slices/CounterSlice.jsx";

function App() {
    const{contador} = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }

  return (
    <div className='container'>
      <div >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
        <p>count is {contador}</p>
      <div className="grid grid-cols-3 gap-2">
        <button className='btn grid-cols-1' onClick={handleIncrement}>
          aumentar
        </button>
          <button onClick={()=>dispatch(decrement())} className='btn grid-cols-1'>Disminuir</button>
          <button onClick={()=>dispatch(incrementByAmount(3))} className='btn grid-cols-1'>Aumentar por 3</button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App