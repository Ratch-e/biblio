import * as C from '../constants';

export function addItem(item) {
  return {
    type: C.ADD_BIBLIO_LIST_ITEM,
    payload: item,
  };
}
