import {useDispatch,useSelector} from 'react-redux'
import  {increment} from "./Redux/Actions/Action"

const ButtonClick = () =>{

const dispatch =useDispatch();
const data = useSelector(state => state.counter)

const click = () =>{
dispatch(increment)
}

return (
  <div>
  {data}
<button onClick={click}>Click me!</button>
  </div>
)
}
