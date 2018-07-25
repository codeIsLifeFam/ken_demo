const initialState = {
data : {}
};
const GET_DATA = "GET_DATA";


export function getData(data) {
  return {
    type: GET_DATA,
    payload: data
  };
}

export default function pixelReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, currentPixel: action.payload };
    default:
      return state;
  }
}