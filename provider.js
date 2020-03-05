import React from "react"
import anotherReducer from "./src/anotherReducer"
import reducer from "./src/reducer"

export const myContext = React.createContext()

const initialState = {
  episodes: [],
  favourites: [],
}

const basicDetail = {
  id: "",
  url: "",
  name: "",
  language: "",
  status: "",
}

const Provider = props => {
  const [originalState, orignalDispatch] = React.useReducer(
    reducer,
    initialState
  )
  const [basicStateDetail, basicDetailDispatch] = React.useReducer(
    anotherReducer,
    basicDetail
  )
  const newValue = {
    state: { originalState, basicStateDetail },
    dispatch: { orignalDispatch, basicDetailDispatch },
  }
  return (
    <myContext.Provider value={newValue}>{props.children}</myContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
