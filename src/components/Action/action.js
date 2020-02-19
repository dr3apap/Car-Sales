const REMOVE_FEATURE = "REMOVE_FEATURE";
const ADD_FEATURE = "ADD_FEATURE";

export function removeFeature(id) {
  // dispatch an action here to remove an item
  return {
    type: REMOVE_FEATURE,
    payload: { feature: id },
  };
}

export function buyItem(id) {
  // dipsatch an action here to add an item

  return {
    type: ADD_FEATURE,
    payload: { feature: id },
  };
}
