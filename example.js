import {useDispatch,useSelector} from 'react-redux'
import  {increment} from "./Action"

const ButtonClick = () =>{

const dispatch =useDispatch();
const data = useSelector(state => state.counter)

const click = () =>{
dispatch(increment)
}

return (
<button onClick={click}>Click me!</button>
)
}
