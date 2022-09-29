import "./App.css";
import { UserContext } from "./index";
import React, { useContext, useReducer } from "react";
import {Button} from 'react-bootstrap';
import TodoList from './ToDoList'



const todosInitialState = {
  todos:[{id:1, text: "finishing writing hooks chapter"},
  {id:2, text: "play with kids"},
  {id:3, text: "read bible"}
]
}

export const TodosContext = React.createContext()

function todosReducer(state, action){
  switch(action.type){
    default:
      return todosInitialState
  }
}

function App(){
  const [state, dispatch] = useReducer(todosReducer, todosInitialState)
  return  (
  <TodosContext.Provider value = {{state, dispatch}}>
    <TodoList />

  </TodosContext.Provider>
  )
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++reducer++++++++++++++++++++++++++++++++++
// const initialState = {
//   count: 0,
// };

// function App(props) {

//   function reducer(state, action){
//     switch(action.type){
//       case "increment":
//         return {count: state.count + 1}
//         case "decrement":
//           return{count: state.count - 1}
//           case "reset":
//             return initialState
//             default:
//               return initialState;
//     }
//   }

//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       Count: {state.count}
//       <br/>
//       <Button onClick={() => dispatch ({type:'increment'})}>
//         Increment
//       </Button>

//       <Button variant="secondary" onClick={()=> dispatch({type:'decrement'})}>
//         Decrement
//       </Button>
//       <Button variant= 'success' onClick={()=> dispatch({type:'reset'})}>
//         Reset
//       </Button>
//     </div>
//   )
// }

export default App;
