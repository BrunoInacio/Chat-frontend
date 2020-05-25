import { ADD_MESSAGE } from "../actions";

const initialState = [
  { origin: "user", content: "User message", date: "2020-04-23T11:05Z"},
  { origin: "bot", content: "Bot message", date: "2020-04-25T11:06Z"},
  { origin: "user", content: "User message", date: "2020-04-24T11:05Z"},
  { origin: "user", content: "User message", date: "2020-04-22T11:05Z"},
]

export const messages = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.payload]  
    default:
      return state
  }
}