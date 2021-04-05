
import Stripe from './Components/Checkout/Stripe'
import {useDispatch,useSelector} from 'react-redux'
import  {increment,getdata} from "./Redux/Actions/Action"
import './App.css';
   
  const d = [{key:1,data:'lol'},{key:2,data:"l"}]
  
  function App() {

  const dispatch =useDispatch();
  const data = useSelector(state => state.counter)   
  const redux_data = useSelector(state=>state.product)
  const click = () =>{
  // dispatch(increment())
  dispatch({
    type: "INCREMENT"
  })
  dispatch({
    type: "GET_DATA",
    payload:d
  },
  )
  console.log(redux_data)
  }
  
  return ( 
    <div>
    <button onClick={click}>Click me!</button>
    {data}
    {redux_data && redux_data.map((item)=>(<div key={item.key}>{item.data}</div>))}
   {/* <Stripe/> */}
    </div>   
  );
}

export default App;
