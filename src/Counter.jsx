import React , {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement , reset , countNum } from './redux/counterSlice';

function Counter() {

  const count = useSelector((state)=>(state.counterReducer.counter))
  console.log(count);

  const dispatch = useDispatch()

  const [num,setNum] = useState(0)
  
  return (
    <>
        <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
            <div className='w-50 border shadow p-4 bg-dark'>
                <h1 className='text-center text-warning'>Counter</h1>
                <h2 className='text-center text-light'>{count}</h2>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-success me-3' onClick={()=>{dispatch(increment())}}>+</button>
                    <button className='btn btn-info me-3' onClick={()=>dispatch(reset())}>Reset</button>
                    <button className='btn btn-danger me-3' onClick={()=>{dispatch(decrement())}}>-</button>
                </div>
                <div className='d-flex justify-content-around my-3'>
                  <input type="number" className='form-control' onChange={(e)=>{setNum(e.target.value)}}/>
                  <button className='btn btn-primary' onClick={()=>{dispatch(countNum(num))}}>Count</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counter