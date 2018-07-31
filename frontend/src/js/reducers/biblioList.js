import * as C from '../constants'

const initialState = {
  list: [],
  error: null,
};

export default function biblioListReducer(state = initialState, action) {
  switch (action.type) {
    case C.ADD_BIBLIO_LIST_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload]
      }

    default:
      return state;
  }
}
