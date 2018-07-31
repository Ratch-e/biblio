import * as C from '../constants'

const initialState = {
  biblioList: [],
  error: null,
};

export default function biblioListReducer(state = initialState, action) {
  switch (action.type) {
    case C.ADD_BIBLIO_LIST_ITEM:
      return {
        ...state,
        biblioList: [...state.biblioList, action.payload]
      }

    default:
      return state;
  }
}
