import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionFailure = errorMessage => ({
  types: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart); // isFetching: True

    collectionRef
      .get()
      .then(snapshot => {
        // console.log(snapshot);
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        // console.log(collectionMap);
        dispatch(fetchCollectionsSuccess(collectionMap)); // collections: collectionMap, isFetching: false
      })
      .catch(error => dispatch(fetchCollectionFailure(error.message)));
  };
};
