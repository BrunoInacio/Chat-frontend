import { ADD_MESSAGE } from "../actions";

const initialState = []

export const messages = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.payload]  
    default:
      return state
  }
}
