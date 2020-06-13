import { ADD_MESSAGE } from "../actions";

const initialState = [
  { origin: "user", content: "User message", date: "2020-04-23T11:05Z"},
  { origin: "bot", content: "Bot message", date: "2020-04-25T11:06Z"},
  { origin: "bot", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu eros, cursus et leo nec, luctus pretium risus. Nullam ac ex blandit, pharetra eros vel, lacinia felis. Aliquam a nisi justo. Vivamus finibus velit ut arcu dignissim auctor. Suspendisse vitae pulvinar mi, sed congue augue. Suspendisse potenti. Sed aliquet molestie erat eu venenatis. Vestibulum blandit, nisi vitae pulvinar tincidunt, nisl ipsum eleifend metus, at imperdiet eros augue sed risus. Maecenas in enim vitae erat pellentesque commodo ac vel turpis. Phasellus vehicula venenatis est, at vulputate nulla congue non. ", date: "2020-04-25T11:06Z"},
  { origin: "bot", content: "Bot message", date: "2020-04-25T11:06Z"},
  { origin: "user", content: "User message", date: "2020-04-24T11:05Z"},
]

export const messages = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.payload]  
    default:
      return state
  }
}
